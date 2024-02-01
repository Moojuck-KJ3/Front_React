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

const RandomPlaceTagList: React.FC = ({ addTagToSideBar, dataTags = null }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const chosenTags = Array.from({ length: 28 }, () => {
      const randomIndex = getRandomInt(0, tagNames.length - 1);
      return tagNames[randomIndex];
    });

    const initialTags = chosenTags.map((tagName, i) => ({
      id: i.toString(),
      title: tagName,
      x: getRandomInt(0, 60),
      y: getRandomInt(0, 60),
      size: getRandomInt(1, 3),
      isFixed: false,
    }));
    setTags(initialTags);

    // Move tags to random positions every 3 seconds
    const intervalId = setInterval(() => {
      setTags((prevTags) => {
        return prevTags.map((tag) => ({
          ...tag,
          x: tag.isFixed ? tag.x : getRandomInt(0, 60),
          y: tag.isFixed ? tag.y : getRandomInt(0, 60),
        }));
      });
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
  }, []);

  const handleTagClick = (clickedTag) => {
    // Add the clicked tag to the fixed tags
    setTags((prevTags) => prevTags.map((tag) => (tag.id === clickedTag.id ? { ...tag, isFixed: true } : tag)));
    addTagToSideBar(clickedTag);

    setTimeout(() => {
      setTags((prevTags) => prevTags.filter((tag) => tag.id !== clickedTag.id));
    }, 1000);
  };


  const tagLists = [
    { id: '8', title: '포근한', x: 58, y: 2, size: 3 },
    { id: '20', title: '편안한', x: 22, y: 1, size: 3 },
    { id: '15', title: '스타일리쉬한', x: 41, y: 13, size: 3 },
    // Add more tags as needed
    { id: '27', title: '이국적', x: 32, y: 19, size: 3 },
    { id: '3', title: '조그마한', x: 60, y: 25, size: 2 },
    { id: '19', title: '럭셔리한', x: 19, y: 18, size: 2 },
    // Add more tags as needed
  ];

  const handleDeleteTagsList = () => {
    tagLists.forEach((tag) => {
      handleTagClick(tag);
    });
  };

  return (
    <div className="w-full h-screen">
      <button onClick={handleDeleteTagsList}>삭제</button>
      {tags.map((tag, i) => (
        <div
          className={`w-42 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ${
            tag.isFixed ? 'fixed-tag scale-125 transition-all opacity-0' : ''
          }`}
          key={i}
          style={{
            position: 'absolute',
            top: `${tag.y + i}%`,
            left: `${tag.x + i}%`,
            background: getRandomColor(),
          }}
          onClick={() => handleTagClick(tag)}
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
