import React, { useState } from 'react';
import AddedTag from '../../modeOne/placeTag/AddedPlaceTag';
import Button from '../../../../../shared/components/buttton/Button';

interface SideBarProps {
  onOpenModal: (value: boolean) => void;
}

const ModeZeroSideBar: React.FC<SideBarProps> = ({ onOpenModal, selectedFoodTags,onDelete }) => {
  return (
    <div className="fixed flex flex-col h-full right-0 w-[180px] bg-white p-2 rounded-md border">
      <h1 className="text-center font-bold mt-1 mb-2">수집 태그 리스트</h1>

      {/* Render added tags dynamically */}
      {selectedFoodTags.map((tag, index) => (
        <AddedTag key={index} tag={tag} onDelete={onDelete} />
      ))}

      <div className="flex justify-center items-center mt-2">
        <Button onClick={() => onOpenModal(true)} title={'선택 완료'} />
      </div>
    </div>
  );
};

export default ModeZeroSideBar;
