import React, { useEffect, useRef, useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import PauseIcon from '@mui/icons-material/Pause';
import SendIcon from '@mui/icons-material/Send';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}
const voiceRecoder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setTranscript] = useState('');

  // Reference to store the SpeechRecognition instance
  const recognitionRef = useRef<any>(null);

  // Function to start recording
  const startRecording = () => {
    setTranscript('');
    setRecordingComplete(false);
    setIsRecording(true);
    // Create a new SpeechRecognition instance and configure it
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    // Event handler for speech recognition results
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];

      // Log the recognition results and update the transcript state
      console.log(event.results);
      setTranscript(transcript);
    };

    // Start the speech recognition
    recognitionRef.current.start();
  };

  // Cleanup effect when the component unmounts
  useEffect(() => {
    return () => {
      // Stop the speech recognition if it's active
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Function to stop recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
  };

  // Toggle recording state and manage recording actions
  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const sendTranscriptToServer = () => {
    // TODO :
    // 서버에 transcript 보내고 응답 받기
    console.log('Sending transcript to server:', transcript);
    startRecording();
  };

  return (
    <div className=" flex flex-col justify-center items-center relative ">
      {/* 음성 텍스트 버전 */}
      <div className="flex w-full flex-col justify-center">
        {(isRecording || transcript) && (
          <div className="w-full m-auto rounded-md border p-4 bg-white">
            <div className="flex-1 flex w-full justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {recordingComplete ? '음성 인식 끝' : '음성 인식 중'}
                </p>
                <p className="text-sm text-muted-foreground py-1">
                  {recordingComplete ? '말해주셔서 감사합니다.' : '말을 해주세요...'}
                </p>
              </div>
              {isRecording && <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />}
            </div>

            {transcript && (
              <div className="border rounded-md p-4 h-full">
                <p className="mb-0">{transcript}</p>
              </div>
            )}
          </div>
        )}

        {/* Button */}
        <div className="flex items-center w-full">
          {recordingComplete ? (
            // Button for sending transcript to server
            <button
              onClick={sendTranscriptToServer}
              className="mt-5 m-auto flex items-center justify-center bg-green-400 hover:bg-green-500 rounded-full w-16 h-16 focus:outline-none"
            >
              <SendIcon />
            </button>
          ) : (
            // Button for starting/stopping recording
            <button
              onClick={handleToggleRecording}
              className={`mt-5 m-auto flex items-center justify-center bg-${
                isRecording ? 'red' : 'blue'
              }-400 hover:bg-${isRecording ? 'red' : 'blue'}-500 rounded-full w-16 h-16 focus:outline-none`}
            >
              {isRecording ? <PauseIcon className="text-white" /> : <MicIcon className="text-white" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default voiceRecoder;
