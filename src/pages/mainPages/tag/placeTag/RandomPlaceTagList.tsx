import React, { useState, useEffect } from 'react';

const tagNames = [
  '평화로운',
  '소박한',
  '서정적인',
  '화려한',
  '안락한',
  '빈티지한',
  '유니크한',
  '쾌적한',
  '조용한',
  '화사한',
  '고풍스러운',
  '몽환적인',
  '고급스러운',
  '트렌디한',
  '캐주얼한',
  '오붓한',
  '고즈넉한',
  '앤틱한',
  '활기찬',
  '느낌있는',
  '럭셔리한',
  '이국적',
  '친절한',
  '세련된',
  '고급진',
  '심플한',
  '편안한',
  '깔끔한',
  '심플한',
  '편안한',
  '아늑한',
  '멋스러운',
  '러블리한',
  '아담한',
  '시끌벅적한',
  '우아한',
  '조그마한',
  '근사한',
  '낭만적인',
  '포근한',
  '복고풍',
  '스타일리쉬한',
  '감각적인',
  '깨끗한',
  '모던한',
  '전통적인',
  '평온한',
  '아기자기',
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomColor = () => `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;

const RandomPlaceTagList: React.FC = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const chosenTags = Array.from({ length: 28 }, () => {
      const randomIndex = getRandomInt(0, tagNames.length - 1);
      return tagNames[randomIndex];
    });

    const initialTags = chosenTags.map((tagName, i) => ({
      title: tagName,
      x: getRandomInt(0, 60),
      y: getRandomInt(0, 60),
      size: getRandomInt(1, 3),
    }));
    setTags(initialTags);

    // Move tags to random positions every 3 seconds
    const intervalId = setInterval(() => {
      setTags((prevTags) => {
        return prevTags.map((tag) => ({
          ...tag,
          x: getRandomInt(0, 60),
          y: getRandomInt(0, 60),
        }));
      });
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
  }, []);

  return (
    <div className="w-full h-screen">
      {tags.map((tag, i) => (
        <div
          className="w-42 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          key={i}
          style={{
            position: 'absolute',
            top: `${tag.y + i}%`,
            left: `${tag.x + i}%`,
            background: getRandomColor(),
          }}
        >
          <div className="px-4 py-3">
            <p
              className="font-bold text-black truncate block capitalize text-center"
              style={{
                fontSize: `${tag.size}vw`,
              }}
            >
              {tag.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomPlaceTagList;
