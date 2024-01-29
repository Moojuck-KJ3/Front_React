import { Button, Typography } from '@mui/material';
import React from 'react';
import Avatar from '../../../../../shared/components/Avatar';
import OnlineIndicator from './OnlineIndicator';

interface FriendListItemProps {
  username: string;
  id: string;
  isOnline: boolean;
}

const FriendListItem: React.FC<FriendListItemProps> = ({ username, id, isOnline }) => {
  return (
    <Button
      style={{
        height: '42px',
        width: '100%',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: 'black',
        position: 'relative',
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: '7px',
          fontWeight: 700,
          color: '#000000',
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendListItem;
