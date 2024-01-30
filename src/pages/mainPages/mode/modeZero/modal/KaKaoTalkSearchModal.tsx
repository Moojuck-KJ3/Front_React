import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const API_KEY = '33d3165b1407ac3d92203219d067a088';
const JS_KEY = 'fa77f847dc1c042e320456f1f78748ad';

const KaKaoTalkSearchModal = ({ handleSelectionDone }) => {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (!searchQuery) {
      // Handle empty search query (optional)
      return;
    }

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchQuery, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK && data.length > 0) {
        const centerPosition = {
          lat: data[0].y,
          lng: data[0].x,
        };

        const marker = {
          position: centerPosition,
          content: data[0].place_name,
        };

        setMarkers([marker]);
        setInfo(marker);

        if (map) {
          map.setCenter(new kakao.maps.LatLng(centerPosition.lat, centerPosition.lng));
        }
      } else {
        // Handle no results or other errors (optional)
        console.error('Search failed:', status);
      }
    });
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl animate-jump-in">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">어떤 지역의 맛집을 추천해드릴까요?</h3>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleSelectionDone}
            >
              <CloseIcon />
            </button>
          </div>
          {/*body*/}

          <div className="relative p-6 flex-auto w-[700px]">
            <div className="mb-4">
              <div className="flex h-full">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border p-2 w-full rounded-lg"
                />
                <button className="w-1/3 rounded-lg bg-emerald-500 text-white ml-2" onClick={handleSearch}>
                  검색
                </button>
                <button className="w-1/3 rounded-lg bg-emerald-500 text-white ml-2" onClick={handleSelectionDone}>
                  선택 완료
                </button>
              </div>
            </div>
            <Map // 로드뷰를 표시할 Container
              center={{
                lat: 32.566826,
                lng: 126.9786567,
              }}
              style={{
                width: '100%',
                height: '550px',
              }}
              level={3}
            >
              {/* Render only the first marker, if available */}
              {markers.length > 0 && (
                <MapMarker
                  key={`marker-${markers[0].content}-${markers[0].position.lat},${markers[0].position.lng}`}
                  position={markers[0].position}
                  onClick={() => setInfo(markers[0])}
                >
                  {info && info.content === markers[0].content && (
                    <div style={{ color: '#000' }}>{markers[0].content}</div>
                  )}
                </MapMarker>
              )}
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaKaoTalkSearchModal;
