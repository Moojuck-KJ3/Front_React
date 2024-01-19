import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <section className="text-gray-700 body-font bg-gradient-to-l from-transparent to-white mx-10 rounded-md">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center min-h-full">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl hidden md:block text-3xl mb-4 font-medium text-gray-900">
              당신을 위한
            </h1>
            <h1 className="title-font sm:text-6xl hidden md:block text-3xl mb-4 font-medium text-gray-900">
              맛집 저격
            </h1>
            <h1 className="title-font sm:text-6xl hidden md:block text-3xl mb-4 font-medium text-gray-900">
              해드릴게요.
            </h1>
            <h1 className="title-font sm:text-4xl block md:hidden text-3xl mb-4 font-medium text-gray-900">
              당신을 위한 맛집 저격해드릴게요.
            </h1>
            <p className="mt-1 text-base mb-8 leading-relaxed">
              나도 잘 모르던 나의 취향 저희가 빠르게 분석해드릴게요.
            </p>
            <div className="flex justify-center">
              <Link to={'/login'}>
                <button className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded py-2 px-4 shadow">
                  시작하기
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-7 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="scale-150 object-cover object-center rounded" alt="hero" src="./LoginImg.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
