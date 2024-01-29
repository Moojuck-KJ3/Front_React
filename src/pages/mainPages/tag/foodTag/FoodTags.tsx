import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FoodCategorys = [
  {
    id: '1',
    title: '치킨',
    imgUrl: './ChickenStyle.png',
  },
  {
    id: '2',
    title: '피자',
    imgUrl: './PizzaStyle.png',
  },
  {
    id: '3',
    title: '떡볶이',
    imgUrl: './DduckbockyStyle.png',
  },
  {
    id: '4',
    title: '국밥',
    imgUrl: './GookbabStyle.png',
  },
  {
    id: '5',
    title: '만두',
    imgUrl: './MandooStyle.png',
  },
  {
    id: '6',
    title: '초밥',
    imgUrl: './JapanStyle.png',
  },
  {
    id: '7',
    title: '치킨1',
    imgUrl: './ChickenStyle.png',
  },
  {
    id: '8',
    title: '피자1',
    imgUrl: './PizzaStyle.png',
  },
  {
    id: '9',
    title: '떡볶이1',
    imgUrl: './DduckbockyStyle.png',
  },
  {
    id: '10',
    title: '국밥1',
    imgUrl: './GookbabStyle.png',
  },
  {
    id: '11',
    title: '만두1',
    imgUrl: './MandooStyle.png',
  },
  { id: '12', title: '초밥1', imgUrl: './JapanStyle.png' },
];

const FoodTags: React.FC = () => {
  const [categorys, setCategorys] = useState(FoodCategorys);
  const [isClicked, setIsClicked] = useState(null);

  const handleHover = (id) => {
    setCategorys((prevTags) =>
      prevTags.map((tag) => (tag.id === id ? { ...tag, isHovered: true } : { ...tag, isHovered: false })),
    );
  };

  const handleLeave = () => {
    setCategorys((prevTags) => prevTags.map((tag) => ({ ...tag, isHovered: false })));
  };

  const handleRemoveTag = (idToRemove) => {
    playSound('shot.mp3');
    setIsClicked(idToRemove);
    setTimeout(() => {
      setCategorys((prevCategorys) => prevCategorys.filter((tag) => tag.id !== idToRemove));
      setIsClicked(null);
    }, 1000);
  };

  const playSound = (soundFileName) => {
    const audio = new Audio(`./${soundFileName}`);
    audio.play();
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
      <ul className="flex flex-wrap">
        {categorys.slice(0, 6).map((tag) => (
          <li
            className="w-32 h-32 mx-4 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  flex flex-col items-center justify-center"
            key={tag.id}
            onMouseEnter={() => handleHover(tag.id)}
            onMouseLeave={handleLeave}
          >
            <button className="relative group" onClick={() => handleRemoveTag(tag.id)}>
              <img
                className="cursor-pointer transition-transform transform group-hover:scale-105"
                src={tag.imgUrl}
                alt={tag.title}
                style={{ width: '100px', height: '80px' }}
              />

              {tag.isHovered && (
                <div>
                  <img
                    className="absolute bottom-0 right-0"
                    src="./Target.png"
                    alt=""
                    style={{ width: '100px', height: '100px' }}
                  />
                </div>
              )}
              {isClicked === tag.id && (
                <div>
                  <img
                    className="absolute bottom-0 right-0"
                    src="./Target.png"
                    alt=""
                    style={{ width: '100px', height: '100px' }}
                  />
                </div>
              )}
              <h1 className="p-1 font-bold">{tag.title}</h1>
            </button>
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap">
        {categorys.slice(6).map((tag) => (
          <li
            className="w-32 h-32 mx-4 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  flex flex-col items-center justify-center "
            key={tag.id}
            onMouseEnter={() => handleHover(tag.id)}
            onMouseLeave={handleLeave}
          >
            <button className="relative group animate-ease-in-out" onClick={() => handleRemoveTag(tag.id)}>
              <img
                className="cursor-pointer transition-transform transform group-hover:scale-105"
                src={tag.imgUrl}
                alt={tag.title}
                style={{ width: '100px', height: '80px' }}
              />
              {tag.isHovered && (
                <div>
                  <img
                    className="absolute bottom-0 right-0"
                    src="./Target.png"
                    alt=""
                    style={{ width: '100px', height: '100px' }}
                  />
                </div>
              )}
              {isClicked === tag.id && (
                <div>
                  <img
                    className="absolute bottom-0 right-0"
                    src="./Target.png"
                    alt=""
                    style={{ width: '100px', height: '100px' }}
                  />
                </div>
              )}
              <h1 className="p-1 font-bold">{tag.title}</h1>
            </button>
          </li>
        ))}
      </ul>
      {/* Additional Effect */}
      <div>
        {categorys.map((tag) => (
          <div
            className="absolute left-60 -bottom-10"
            key={tag.id}
            onMouseEnter={() => handleHover(tag.id)}
            onMouseLeave={handleLeave}
          >
            {isClicked && <img className="" src="./Gun.png" alt="" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodTags;
