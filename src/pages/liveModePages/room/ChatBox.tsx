import React from 'react';

const ChatBox = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-grow overflow-y-auto">
        {/* Chat messages */}
        <div className="flex flex-col mb-4 gap-4 py-4">
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
              <p className="text-gray-900 text-sm">ㅋㅋ준비됬냐?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
              <p className="text-white text-sm">아 뭐먹지~~</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
              <p className="text-gray-900 text-sm">근데 이거 신기하네! </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-16">
        {/* Chat input */}
        <input
          type="text"
          className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-lg mr-4"
          placeholder="메세지를 입력하세요."
        />
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{sendSVG}</button>
      </div>
    </div>
  );
};

const sendSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
  </svg>
);

export default ChatBox;
