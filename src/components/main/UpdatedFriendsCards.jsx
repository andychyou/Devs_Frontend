import React from 'react';
import { UpdatedFriendsBox, UpdatedFriendsSection} from '../../styledComponents';
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