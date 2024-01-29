import React, { useState } from 'react';
import ResultCard from './ResultCard';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from '../../../../../shared/components/buttton/Button';

const DUMMY_PLACE = [
  {
    id: 'item1',
    title: '토니모리',
    imgUrl: './PlacePhoto_1.png',
  },
  {
    id: 'item2',
    title: '역전할맥',
    imgUrl: './PlacePhoto_2.png',
  },
  {
    id: 'item3',
    title: '교촌치킨',
    imgUrl: './PlacePhoto.png',
  },
  {
    id: 'item4',
    title: '할매국밥',
    imgUrl: './PlacePhoto_1.png',
  },
  {
    id: 'item5',
    title: '돈까스',
    imgUrl: './PlacePhoto_2.png',
  },
];

const ResultCardList: React.FC = ({ onOpenModal }) => {
  const [rerender, setRerender] = useState(false);
  const [draggedListA, setDraggedListA] = useState([]);
  const [draggedListB, setDraggedListB] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleButtonClick = () => {
    setRerender((prev) => !prev);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (event, targetList) => {
    event.preventDefault();

    const id = event.dataTransfer.getData('id');
    const item = DUMMY_PLACE.find((x) => x.id === id);

    if (item) {
      if (targetList === 'A') {
        setDraggedListA([...draggedListA, item]);
      } else if (targetList === 'B') {
        setDraggedListB([...draggedListB, item]);
      }
    }

    setIsDragging(false);
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData('id', event.currentTarget.id);
    setIsDragging(true);
  };

  const targetClassNameA = `w-[180px] h-[580px] absolute left-5 top-5 items-center py-1 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-40 ${
    isDragging ? 'border-black' : 'border-indigo-300'
  }`;

  const targetClassNameB = ` w-[180px] h-[580px] absolute right-5 top-5 items-center py-1  bg-white rounded-lg shadow-lg border-dashed border-2 min-h-40 ${
    isDragging ? 'border-black' : 'border-indigo-300'
  }`;

  return (
    <div>
      <ul className="flex gap-10">
        {DUMMY_PLACE.map((item, index) => (
          <li id={item.id} key={`${index}-${rerender}`} draggable onDragStart={handleDragStart}>
            <ResultCard delay={index * 500} {...item} />
          </li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>
        <RestartAltIcon style={{ fontSize: 'small' }} />
      </button>
      {/* USER A */}
      <div className={targetClassNameA} onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, 'A')}>
        {/* Target Area */}
        <ul className="list-none flex flex-col px-4 m-0 min-h-40 rounded-lg">
          {draggedListA.map((item) => (
            <li key={item.id} draggable>
              <ResultCard delay={0} {...item} />
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 w-full mx-10 mb-2 justify-center">
          <Button onClick={onOpenModal} title={'선택 완료'} />
        </div>
      </div>
      {/* USER A */}
      <div className={targetClassNameB} onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, 'B')}>
        {/* Target Area */}
        <ul className=" list-none flex flex-col px-4 m-0 min-h-40 rounded-lg">
          {draggedListB.map((item) => (
            <li key={item.id} draggable>
              <ResultCard delay={0} {...item} />
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 w-full mx-10 mb-2 justify-center">
          <Button onClick={onOpenModal} title={'선택 완료'} />
        </div>
      </div>
    </div>
  );
};

export default ResultCardList;
