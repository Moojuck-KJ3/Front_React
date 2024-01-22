import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';

const InvitationDecisionButtons = ({ disabled, acceptInvitaionHandler, rejectInvitaionHandler }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        style={{
          color: '#3ba55d',
        }}
        disabled={disabled}
        onClick={acceptInvitaionHandler}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        style={{
          color: '#ff0000',
        }}
        disabled={disabled}
        onClick={rejectInvitaionHandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;
