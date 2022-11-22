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
  const [feed1, setFeed1] = useState([]);
  const [feed2, setFeed2] = useState([]);
  const [updatedId, setUpdatedId] = useState([]);
  
  const [search, setsearch] = useState(null);
  const [userlist, setUserlist] = useState();
  //메인 피드 api
  
  const getMainfeed = () => {
  var feed_list;
    axios.get(`${APIURL}/mainfeed/`,{headers:{Authorization: 'token '+getCookie("token")} })
    .then(res => {
      // console.log('feed-res.data', res.data)
      // console.log('feed', feed)
      //이렇게 바로 콘솔하면 안나옴
      feed_list = res.data.feed
      if(feed_list.length <= 2){
        setFeed1(feed_list)
      }
      else{
        setFeed1(feed_list.slice(0,2))
        setFeed2(feed_list.slice(2))
      }
    })
    .catch(err => {
      console.log("main api error")
      console.log(err)
    })
  }
  
  

  

// console.log('feed', feed)
// console.log('feed', feed)
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
          
          
    
           {feed1.map((li, idx) =>(<div onClick={()=>goProfile(li.user)}><UpdatedFriendsCard  profile={li.user} name={li.name} updated={li.update} ></UpdatedFriendsCard></div>))} 
           {/* {feed1[0]!=null && <div onClick={()=>goProfile(feed1[0].user)}><UpdatedFriendsCard profile={feed1[0].user} updated={feed1[0].update} ></UpdatedFriendsCard></div>}  
           {feed1[1]!=null && <div onClick={()=>goProfile(feed1[1].user)}><UpdatedFriendsCard profile={feed1[1].user} updated={feed1[1].update} ></UpdatedFriendsCard></div>}   */}
        
        <UpdatedFriendsRecommend></UpdatedFriendsRecommend>
        {feed2.map((li, idx) =>(<div onClick={()=>goProfile(li.user)}><UpdatedFriendsCard  profile={li.user} updated={li.update} ></UpdatedFriendsCard></div>))} 
          {/* {feed2[0]!=null && <div onClick={()=>goProfile(feed2[0].user)}><UpdatedFriendsCard profile={feed2[0].user} updated={feed2[0].update} ></UpdatedFriendsCard></div>}  
          {feed2[1]!=null && <div onClick={()=>goProfile(feed2[1].user)}><UpdatedFriendsCard profile={feed2[1].user} updated={feed2[1].update} ></UpdatedFriendsCard></div>}   */}
        
    </>
  );
};

export default React.memo(MainPage);