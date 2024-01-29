import store from '../store/store';
import { setLocalStream, setRemoteStreams } from '../store/actions/roomActions';
import * as socketConnection from './socketConnection';

const getConfiguration = () => {
  const turnIceServers = null;

  if (turnIceServers) {
    // TODO use TURN server credentials
  } else {
    console.warn('Using only STUN server');
    return {
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
      ],
    };
  }
};

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  video: true,
  audio: true,
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((err) => {
      console.log(err);
      console.log('Cannot get an access to local stream');
    });
};

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const configuration = getConfiguration();
  const pc = new RTCPeerConnection(configuration);
  console.log(pc);

  const localStream = store.getState().room.localStream;

  if (isInitiator) {
    console.log('preparing new peer connection as initiator');
  } else {
    console.log('preparing new peer connection as not initiator');
  }

  // Add local stream to the peer connection
  localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

  // Set up event listeners for the peer connection
  pc.onicecandidate = (event) => {
    if (event.candidate) {
      const signalData = {
        signal: event.candidate,
        connUserSocketId: connUserSocketId,
      };
      socketConnection.signalPeerData(signalData);
    }
  };

  pc.onicecandidate = (event) => {
    if (event.candidate) {
      const signalData = {
        signal: event.candidate,
        connUserSocketId: connUserSocketId,
      };
      socketConnection.signalPeerData(signalData);
    }
  };

  pc.ontrack = (event) => {
    console.log('ontrack event triggered for user:', connUserSocketId);

    const remoteStream = event.streams[0];
    remoteStream.connUserSocketId = connUserSocketId;
    addNewRemoteStream(remoteStream);
  };

  // Create an offer if the user is the initiator
  if (isInitiator) {
    pc.createOffer()
      .then((offer) => {
        return pc.setLocalDescription(offer);
      })
      .then(() => {
        const signalData = {
          signal: pc.localDescription,
          connUserSocketId: connUserSocketId,
        };
        socketConnection.signalPeerData(signalData);
      })
      .catch((error) => {
        console.error('Error creating offer:', error);
      });
  }

  peers[connUserSocketId] = pc;
};

export const handleSignalingData = async (data) => {
  const { connUserSocketId, signal } = data;

  if (peers[connUserSocketId]) {
    try {
      if (signal.type === 'offer') {
        await peers[connUserSocketId].setRemoteDescription(new RTCSessionDescription(signal));
        const answer = await peers[connUserSocketId].createAnswer();
        await peers[connUserSocketId].setLocalDescription(answer);
        const signalData = {
          signal: answer,
          connUserSocketId: connUserSocketId,
        };
        socketConnection.signalPeerData(signalData);
      } else if (signal.type === 'answer') {
        await peers[connUserSocketId].setRemoteDescription(new RTCSessionDescription(signal));
      } else if (signal.candidate) {
        await peers[connUserSocketId].addIceCandidate(new RTCIceCandidate(signal));
      }
    } catch (error) {
      console.error('Error handling signaling data:', error);
    }
  }
};
const addNewRemoteStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = [...remoteStreams, remoteStream];

  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const closeAllConnections = () => {
  Object.values(peers).forEach((peer) => {
    peer.close();
  });

  peers = {};
};

export const handleParticipantLeftRoom = (data) => {
  const { connUserSocketId } = data;

  if (peers[connUserSocketId]) {
    peers[connUserSocketId].close();
    delete peers[connUserSocketId];
  }

  const remoteStreams = store.getState().room.remoteStreams;

  const newRemoteStreams = remoteStreams.filter((remoteStream) => remoteStream.connUserSocketId !== connUserSocketId);

  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const switchOutgoingTracks = (stream) => {
  for (let socketId in peers) {
    for (let transceiver of peers[socketId].getTransceivers()) {
      const trackKind = transceiver.sender.track.kind;

      for (let outgoingTrack of stream.getTracks()) {
        if (outgoingTrack.kind === trackKind) {
          transceiver.sender.replaceTrack(outgoingTrack);
          break;
        }
      }
    }
  }
};
