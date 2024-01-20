import React from 'react';

const FollowFriendsList = () => {
  return (
    <div className="w-full mx-auto">
      <div className="my-3 p-3 flex items-center justify-between border rounded-lg cursor-pointer">
        <div className="flex items-center">
          <img className="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/girl" alt="Girl" />
          <div className="ml-2 flex flex-col">
            <div className="leading-snug text-sm text-gray-900 font-bold">Jane doe</div>
            <div className="leading-snug text-xs text-gray-600">@jane</div>
          </div>
        </div>
        <button className="h-8 px-3 text-xs bg-white hover:bg-gray-100 font-bold text-gray-800 border rounded-full shadow">
          친구 초대
        </button>
      </div>
      <div className="my-3 p-3 flex items-center justify-between border rounded-lg cursor-pointer ">
        <div className="flex items-center">
          <img className="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/boy" alt="Boy" />
          <div className="ml-2 flex flex-col">
            <div className="leading-snug text-sm text-gray-900 font-bold">John doe</div>
            <div className="leading-snug text-xs text-gray-600">@john</div>
          </div>
        </div>
        <button className="h-8 px-3 text-xs bg-white hover:bg-gray-100 font-bold text-gray-800 border rounded-full shadow">
          친구 초대
        </button>
      </div>
      <div className="my-3 p-3 flex items-center justify-between border rounded-lg cursor-pointer ">
        <div className="flex items-center">
          <img className="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/paris" alt="Paris" />
          <div className="ml-2 flex flex-col">
            <div className="leading-snug text-sm text-gray-900 font-bold">Paris</div>
            <div className="leading-snug text-xs text-gray-600">@paris</div>
          </div>
        </div>
        <button className="h-8 px-3 text-xs bg-white hover:bg-gray-100 font-bold text-gray-800 border rounded-full shadow">
          친구 초대
        </button>
      </div>
      <div className="my-3 p-3 flex items-center justify-between border rounded-lg cursor-pointer ">
        <div className="flex items-center">
          <img className="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/paris" alt="Paris" />
          <div className="ml-2 flex flex-col">
            <div className="leading-snug text-sm text-gray-900 font-bold">Paris</div>
            <div className="leading-snug text-xs text-gray-600">@paris</div>
          </div>
        </div>
        <button className="h-8 px-3 text-xs bg-white hover:bg-gray-100 font-bold text-gray-800 border rounded-full shadow">
          친구 초대
        </button>
      </div>
      <div className="my-3 p-3 flex items-center justify-between border rounded-lg cursor-pointer">
        <div className="flex items-center">
          <img className="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/paris" alt="Paris" />
          <div className="ml-2 flex flex-col">
            <div className="leading-snug text-sm text-gray-900 font-bold">Paris</div>
            <div className="leading-snug text-xs text-gray-600">@paris</div>
          </div>
        </div>
        <button className="h-8 px-3 text-xs bg-white hover:bg-gray-100 font-bold text-gray-800 border rounded-full shadow">
          친구 초대
        </button>
      </div>
    </div>
  );
};

export default FollowFriendsList;
