import React from 'react';
import UpdatedFriendsStat from './UpdatedFriendsStat';
import UpdatedFriendsCards from './UpdatedFriendsCards';
import UpdatedFriendsRecommend from './UpdatedFriendsRecommend';
import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import axios from 'axios';
import UpdatedFriendsCard from './UpdatedFriendsCard';

const MainPage = () => {
  const id = getCookie('user_id')
  const [feed, setFeed] = useState([]);
  const [updatedId, setUpdatedId] = useState([]);
  
  const [search, setsearch] = useState(null);
  const [userlist, setUserlist] = useState();
  //메인 피드 api
  
  const getMainfeed = () => {
  var feed_list = []
    axios.get(`${APIURL}/mainfeed/`,{headers:{Authorization: 'token '+getCookie("token")} })
    .then(res => {
      // console.log('feed-res.data', res.data)
      // console.log('feed', feed)
      //이렇게 바로 콘솔하면 안나옴
      for(let i = 0 ; i < res.data.feed.length; i++){
        if(i % 2 == 1){
          feed_list.push(res.data.feed[i])
        }
      }
      setFeed(feed_list)
      setUpdatedId(res.data.updated_id)
    })
    .catch(err => {
      console.log("main api error")
      console.log(err)
    })
  }

// console.log('feed', feed)
// console.log('feed', feed)
// console.log('updated_id', updatedId)
//밖에서 콘솔하기
useEffect(() => {
  getMainfeed()
},[])

  const navigate = useNavigate();
  const goProfile = (userid) => {
      navigate(`/profile/${userid}`);
  };
  return (
    <>
        <UpdatedFriendsStat ></UpdatedFriendsStat>

        {/* <UpdatedFriendsCards></UpdatedFriendsCards> */}
          {feed[0]!=null && <div onClick={()=>goProfile(feed[0].profile)}><UpdatedFriendsCard profile={feed[0].profile} type={feed[0].type} ></UpdatedFriendsCard></div>}
          {feed[1]!=null && <div onClick={()=>goProfile(feed[1].profile)}><UpdatedFriendsCard profile={feed[1].profile} type={feed[1].type} ></UpdatedFriendsCard></div>}
          {feed[2]!=null && <div onClick={()=>goProfile(feed[2].profile)}><UpdatedFriendsCard profile={feed[2].profile} type={feed[2].type} ></UpdatedFriendsCard></div>}
          {feed[3]!=null && <div onClick={()=>goProfile(feed[3].profile)}><UpdatedFriendsCard profile={feed[3].profile} type={feed[3].type} ></UpdatedFriendsCard></div>}
          {feed[4]!=null && <div onClick={()=>goProfile(feed[4].profile)}><UpdatedFriendsCard profile={feed[4].profile} type={feed[4].type} ></UpdatedFriendsCard></div>}
        
        
        <UpdatedFriendsRecommend></UpdatedFriendsRecommend>
   
    
    </>
  );
};

export default React.memo(MainPage);