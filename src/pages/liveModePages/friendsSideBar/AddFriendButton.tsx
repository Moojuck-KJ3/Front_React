import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import AddFriendDialog from './AddFriendDialog';

const AddFriendButton: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenFrinedDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDailog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        style={{
          width: '80%',
          height: '30px',
          marginTop: '10px',
          marginLeft: '5px',
          color: 'white',
          background: '#3ba55d',
        }}
        onClick={handleOpenFrinedDialog}
      >
        친구 초대하기
        <AddFriendDialog isDialogOpen={isDialogOpen} closeDialogHander={handleCloseAddFriendDailog} />
      </Button>
    </>
  );
};

export default AddFriendButton;
