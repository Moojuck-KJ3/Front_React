import React from 'react';

const RegisterPageSideImg: React.FC = () => {
  return (
    <div className="flex-1 bg-indigo-100 text-center hidden rounded-r-lg lg:flex">
      <div
        className=" m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./LoginImg.png')",
        }}
      ></div>
    </div>
  );
};

export default RegisterPageSideImg;
