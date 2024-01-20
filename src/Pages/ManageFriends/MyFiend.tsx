import React from 'react';
import FriendMenuBar from '../../Components/FriendMenuBar';
import FollowFriendsList from '../../Components/FollowFriendsList';
import SearchButton from '../../Components/SearchButton';

const MyFiend = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
        <div className="col-span-2 sm:col-span-2">
          <div className="bg-white shadow rounded-lg p-4">
            <FriendMenuBar />
          </div>
        </div>
        <div className="col-span-4 sm:col-span-4">
          <div className="bg-white shadow rounded-lg p-4">
            <h1 className="font-bold text-center mb-4 text-xl">친구 리스트</h1>
            <FollowFriendsList />
          </div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <div className="bg-white shadow rounded-lg p-4">
            <h1 className="text-center font-bold mb-3">친구 신청</h1>
            <div className="my-1 p-3 flex items-center justify-between border rounded-lg cursor-pointer ">
              <div className="flex items-center">
                <img className="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/paris" alt="Paris" />
                <div className="ml-2 flex flex-col">
                  <div className="leading-snug text-sm text-gray-900 font-bold">Paris</div>
                  <div className="leading-snug text-xs text-gray-600">@paris</div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="text-xl font-bold hover:scale-105 transition-all">✅</button>
                <button className="text-xl font-bold hover:scale-105 transition-all">❌</button>
              </div>
            </div>
            <div className="my-1 p-3 flex items-center justify-between border rounded-lg cursor-pointer ">
              <div className="flex items-center">
                <img className="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/paris" alt="Paris" />
                <div className="ml-2 flex flex-col">
                  <div className="leading-snug text-sm text-gray-900 font-bold">Paris</div>
                  <div className="leading-snug text-xs text-gray-600">@paris</div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="text-xl font-bold hover:scale-105 transition-all">✅</button>
                <button className="text-xl font-bold hover:scale-105 transition-all">❌</button>
              </div>
            </div>
            <div className="my-1 p-3 flex items-center justify-between border rounded-lg cursor-pointer ">
              <div className="flex items-center">
                <img className="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/paris" alt="Paris" />
                <div className="ml-2 flex flex-col">
                  <div className="leading-snug text-sm text-gray-900 font-bold">Paris</div>
                  <div className="leading-snug text-xs text-gray-600">@paris</div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="text-xl font-bold hover:scale-105 transition-all">✅</button>
                <button className="text-xl font-bold hover:scale-105 transition-all">❌</button>
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-4">
              <button className="h-8 px-3 text-xs bg-white hover:bg-gray-100 font-bold text-gray-800 border rounded-full shadow">
                전부 수락
              </button>
              <button className="h-8 px-3 text-xs bg-white hover:bg-gray-100 font-bold text-gray-800 border rounded-full shadow">
                전부 거절
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFiend;
