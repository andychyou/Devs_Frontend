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
  const [mainfeed, setMainfeed] = useState({});
  const [search, setsearch] = useState({});
  const [userlist, setUserlist] = useState();
  //메인 피드 api
  var updated_list = []
  
  const getMainfeed = () => {
    axios.get(`${APIURL}/mainfeed/`,{headers:{Authorization: 'token '+getCookie("token")} })
    .then(res => {
      setMainfeed(res.data)
      console.log('mainfeed-res.data', res.data)
      console.log('mainfeed', mainfeed)
      for(let i = 0 ; i < res.data.feed.length; i++){
        if(i % 2 == 1){
          updated_list.push(res.data.feed[i])
        }
      }
      // console.log('updated_list', updated_list)
    })
    .catch(err => {
      console.log("main api error")
      console.log(err)
    })
  
}
const Search = () =>{
  axios.get(`${APIURL}/search/${"tes"}`)
    .then(res => {
      console.log('search-res.data ', res.data)
      setsearch(res.data)
      console.log('search: ', res.data)
    })
    .catch(err => {
      console.log("search api error")
      console.log(err)
    })
}

useEffect(() => {
  getMainfeed()
  Search()
},[])

 

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
        <section>
          {/* <UpdatedFriendsCard updated_id={mainfeed.updated_id}></UpdatedFriendsCard> */}
          {/* {userlist.map((data) => (
          <UpdatedFriendsCard updated_id={data}></UpdatedFriendsCard>
          ))} */}
          {<>
            {/* <div>{mainfeed.feed[0].user}</div> */}
            {/* <div>{mainfeed.feed[0].user}</div>
            <div>{mainfeed.feed[0].link}</div>
            <div>{mainfeed.feed[0].belong}</div>
            <div>{mainfeed.feed[0].major}</div>
            <div>{mainfeed.feed[0].main_position}</div> */}
            </>
            
          }

        </section>
        
        <UpdatedFriendsRecommend></UpdatedFriendsRecommend>
   
    
    </>
  );
};

export default React.memo(MainPage);