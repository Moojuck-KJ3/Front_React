import React from 'react';

const Button = ({ title, onClick }) => {
  return (
    <button
      className="w-[100px] text-sm bg-green-300 hover:bg-green-400 transition-all hover:scale-105 text-gray-800 font-semibold border rounded-xl py-2 
    px-2 shadow"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
