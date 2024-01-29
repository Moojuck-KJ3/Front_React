import React, { useState } from 'react';
import AddedTag from '../../../tag/placeTag/AddedPlaceTag';
import Button from '../../../../../shared/components/buttton/Button';

interface SideBarProps {
  onOpenModal: (value: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onOpenModal }) => {
  return (
    <div className="fixed flex flex-col h-full right-0 w-[180px] bg-white p-2 rounded-md border">
      <h1 className="text-center font-bold mt-1 mb-2">수집 태그 리스트</h1>
      <AddedTag />
      <AddedTag />
      <AddedTag />
      <AddedTag />
      <AddedTag />
      <div className="flex justify-center items-center mt-2">
        <Button onClick={onOpenModal} title={'선택 완료'} />
      </div>
    </div>
  );
};

export default SideBar;
