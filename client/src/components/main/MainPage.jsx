import React from 'react';
import { Button } from 'react-bootstrap';
import './mainpage.css';
import UpdatedFriendsCard from './UpdatedFriendsCard';
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