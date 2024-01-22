import React, { useEffect, useState } from 'react';
import { validateMail } from '../../../shared/utils/validator';
import { Button, Dialog, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import InputWithLabel from '../../../shared/components/InputWithLabel';

export const AddFriendDialog = ({ isDialogOpen, closeDialogHander, sendFriendInvitation = () => {} }) => {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {};

  const handleCloseDialog = () => {
    closeDialogHander();
    setEmain('');
  };

  useEffect(() => {
    setIsFormValid(validateMail(email));
  }, [email, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>친구 초대하기</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>초대하고 싶은 친구의 이메일을 입력해주세요.</Typography>
          </DialogContentText>
          <InputWithLabel type={email} value={email} setValue={setEmail} placeholder="이메일" />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            sx={{
              width: '100%',
              height: '40px',
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
              color: 'white',
              background: '#3ba55d',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 500,
              '&:hover': {
                background: '#2e8c4e',
              },
            }}
          >
            초대하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
