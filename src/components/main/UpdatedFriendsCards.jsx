import React from 'react';
import { UpdatedFriendsBox, UpdatedFriendsSection} from '../../styledComponents';
import UpdatedFriendsBar from './UpdatedFriendsBar';
import { Button } from 'react-bootstrap';
import UpdatedFriendsCard from './UpdatedFriendsCard';


const UpdatedFriendsCards = () => {
  return (
    <>
        <UpdatedFriendsCard></UpdatedFriendsCard>
        <UpdatedFriendsCard></UpdatedFriendsCard>
        <UpdatedFriendsCard></UpdatedFriendsCard>
        <UpdatedFriendsCard></UpdatedFriendsCard>
    </>
  );
};

export default React.memo(UpdatedFriendsCards);