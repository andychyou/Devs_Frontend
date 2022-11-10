import React from 'react';
import UpdatedFriendsStat from './UpdatedFriendsStat';
import UpdatedFriendsCards from './UpdatedFriendsCards';
import UpdatedFriendsRecommend from './UpdatedFriendsRecommend';
import { useState, useEffect } from 'react';
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import axios from 'axios';

const MainPage = () => {
  const id = getCookie('user_id')
  const [isAdd, setIsAdd] = useState(false);

  const [career, setCareer] = useState([]);

  useEffect(() => {
    axios.get(`${APIURL}/mainfeed/${id}/`)
    .then(res => {
      console.log('mainfeed: ', res.data)
    })
    .catch(err => {
      console.log(err)
    })

  }, [])
  return (
    <>
        <UpdatedFriendsStat></UpdatedFriendsStat>

        <UpdatedFriendsCards></UpdatedFriendsCards>

        
        <UpdatedFriendsRecommend></UpdatedFriendsRecommend>
   
    
    </>
  );
};

export default React.memo(MainPage);