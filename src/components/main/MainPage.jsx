import React from 'react';
import UpdatedFriendsStat from './UpdatedFriendsStat';
import UpdatedFriendsCards from './UpdatedFriendsCards';
import UpdatedFriendsRecommend from './UpdatedFriendsRecommend';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from "react-router-dom";
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import axios from 'axios';
import UpdatedFriendsCard from './UpdatedFriendsCard';

const MainPage = () => {
  const id = getCookie('user_id')
  const [mainfeed, setMainfeed] = useState([]);
  const [search, setsearch] = useState(null);
  const [userlist, setUserlist] = useState();
  //메인 피드 api
  
  const getMainfeed = () => {
  var updated_list = []
    axios.get(`${APIURL}/mainfeed/`,{headers:{Authorization: 'token '+getCookie("token")} })
    .then(res => {
      setMainfeed(res.data.feed)
      console.log('mainfeed-res.data', res.data)
      // console.log('mainfeed', mainfeed)
      //이렇게 바로 콘솔하면 안나옴
      for(let i = 0 ; i < res.data.feed.length; i++){
        if(i % 2 == 1){
          updated_list.push(res.data.feed[i])
        }
      }
      setMainfeed(updated_list)
    })
    .catch(err => {
      console.log("main api error")
      console.log(err)
    })
  
}

// console.log('mainfeed', mainfeed)
console.log('mainfeed', mainfeed)
//밖에서 콘솔하기
useEffect(() => {
  getMainfeed()
},[])

// const getSearch = () =>{
//   axios.get(`${APIURL}/search/${"tes"}`)
//     .then(res => {
//       console.log('search-res.data ', res.data)
//       setsearch(res.data)
//       console.log('search: ', search)
//     })
//     .catch(err => {
//       console.log("search api error")
//       console.log(err)
//     })
// }

// useEffect(() => {
//   getMainfeed()
//   getSearch()
// },[])

 

  // useEffect(()=>{
  //   axios.get(`${APIURL}/mainfeed/`,{headers:{Authorization: 'token '+getCookie("token")} })
  //   .then(res => {
  //     setMainfeed(res.data)
  //     console.log(mainfeed)
  //     console.log(res.data)
  //   })
  //   .catch(err => {
  //     console.log("mainfeed api error")
  //     console.log(err)
  //   })
  // }, [])

  //search api
  // useEffect(() => {
  //   axios.get(`${APIURL}/search/${"admin"}`)
  //   .then(res => {
  //     console.log('search: ', res.data)
  //   })
  //   .catch(err => {
  //     console.log("search api error")
  //     console.log(err)
  //   })
  // }, [])

  
  return (
    <>
        <UpdatedFriendsStat></UpdatedFriendsStat>

        {/* <UpdatedFriendsCards></UpdatedFriendsCards> */}
          {mainfeed[0]!=null && <UpdatedFriendsCard profile={mainfeed[0].profile} type={mainfeed[0].type}></UpdatedFriendsCard>}
          {mainfeed[1]!=null && <UpdatedFriendsCard profile={mainfeed[1].profile} type={mainfeed[1].type}></UpdatedFriendsCard>}
          {mainfeed[2]!=null && <UpdatedFriendsCard profile={mainfeed[2].profile} type={mainfeed[2].type}></UpdatedFriendsCard>}
          {mainfeed[3]!=null && <UpdatedFriendsCard profile={mainfeed[3].profile} type={mainfeed[3].type}></UpdatedFriendsCard>}
          {mainfeed[4]!=null && <UpdatedFriendsCard profile={mainfeed[4].profile} type={mainfeed[4].type}></UpdatedFriendsCard>}
        
        
        <UpdatedFriendsRecommend></UpdatedFriendsRecommend>
   
    
    </>
  );
};

export default React.memo(MainPage);