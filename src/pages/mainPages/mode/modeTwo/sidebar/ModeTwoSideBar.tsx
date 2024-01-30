import React, { useState } from 'react';
import Button from '../../../../../shared/components/buttton/Button';

const ModeTwoSideBar = () => {
  return (
    <div className="fixed flex flex-col right-0 top-0  h-2/3  w-[180px] bg-white p-2 rounded-md border">
      <h1 className="text-center font-bold mt-1 mb-2">수집 장소 리스트</h1>

      <div className="flex justify-center items-center mt-2">
        <Button title={'선택 완료'} />
      </div>
    </div>
  );
};

export default ModeTwoSideBar;
