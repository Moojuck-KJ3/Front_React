import React from 'react';

const SocailMediaButton: React.FC = ({ text, svg }) => {
  return (
    <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 px-4 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
      <div className="bg-white p-2 rounded-full">{svg}</div>
      <span className="ml-2">{text}</span>
    </button>
  );
};

export default SocailMediaButton;
