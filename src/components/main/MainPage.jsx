import React from 'react';
import UpdatedFriendsStat from './UpdatedFriendsStat';
import UpdatedFriendsCards from './UpdatedFriendsCards';
import UpdatedFriendsRecommend from './UpdatedFriendsRecommend';



const MainPage = () => {
  return (
    <>
        <UpdatedFriendsStat></UpdatedFriendsStat>

        <UpdatedFriendsCards></UpdatedFriendsCards>

        
        <UpdatedFriendsRecommend></UpdatedFriendsRecommend>
   
    
    </>
  );
};

export default React.memo(MainPage);