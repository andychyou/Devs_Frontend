import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import axios from 'axios';
import { UpdatedFriendsBox, UpdatedFriendsRecommendCardContainer, UpdatedFriendsSection} from '../../styledComponents';
import UpdatedFriendsRecommendToYou from './UpdatedFriendsRecommendToYou';
import UpdatedFriendsRecommendCard from './UpdatedFriendsRecommendCard';


const UpdatedFriendsRecommend = () => {

  const [myHashtagList, setMyHashtagList] = useState([]);
  // const myHashtagList= useRef([]);
  const getMyHashtagList = async () => {
    const res = await axios.get(
      `${APIURL}/profile/hashtag/get_hashtag/${getCookie("user_id")}/`
    );

    if (res.status == 200) {
      const temp = [];
      for (let i = 0; i < res.data.length; i++) {
        temp.push(res.data[i].hashtag_name);
      }
      const hey = await temp
      setMyHashtagList(hey);
      // myHashtagList.current = temp
    } else {
      console.log("get hashtag fail");
    }
  };

  
  const [g, setg] = useState(0)

  useEffect(()=>{
    getMyHashtagList()
  }, [])

  const [profiles, setProfiles] = useState({});
  const getProfilesList = async () => {
    var li = {}
    for(const hashtag of myHashtagList){
     console.log('afdsafdsfdsa',hashtag)
      const res =  await axios.get(
        `${APIURL}/profile/hashtag/get_user/${hashtag}/`
      );
      if (res.status == 200) {
        console.log('profiles',res.data[0].profile)
        const row = res.data[0].profile
        li[hashtag] = row
      } else {
        console.log("get hashtag fail");
      }
    }
    const hey = await li
    console.log('li', li)
    setProfiles(hey)
  };

  useEffect(()=>{
    if(myHashtagList.length != 0){
      getProfilesList()
    }
  },[myHashtagList])

  
    
  console.log(myHashtagList)
  console.log(profiles)
  return (
    <>
        <section>
            <UpdatedFriendsRecommendToYou hashtag_list={myHashtagList}></UpdatedFriendsRecommendToYou>
            <UpdatedFriendsRecommendCardContainer>
              {myHashtagList.map((hashtag, idx)=>{
                <UpdatedFriendsRecommendCard hashtag={hashtag} key={idx}>

                </UpdatedFriendsRecommendCard>
              })}
              {/* {myHashtagList[0]  && <UpdatedFriendsRecommendCard user={myHashtagList[0]}></UpdatedFriendsRecommendCard>}
              {myHashtagList[1]  && <UpdatedFriendsRecommendCard user={myHashtagList[1]}></UpdatedFriendsRecommendCard>}
              {myHashtagList[2]  && <UpdatedFriendsRecommendCard user={myHashtagList[2]}></UpdatedFriendsRecommendCard>}
              {myHashtagList[3]  && <UpdatedFriendsRecommendCard user={myHashtagList[3]}></UpdatedFriendsRecommendCard>}
              {myHashtagList[4]  && <UpdatedFriendsRecommendCard user={myHashtagList[4]}></UpdatedFriendsRecommendCard>} */}
            </UpdatedFriendsRecommendCardContainer>
        </section>
    </>
  );
};

export default React.memo(UpdatedFriendsRecommend);