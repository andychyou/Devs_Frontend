import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import axios from 'axios';
import { UpdatedFriendsBox, UpdatedFriendsRecommendCardContainer, UpdatedFriendsSection} from '../../styledComponents';
import UpdatedFriendsRecommendToYou from './UpdatedFriendsRecommendToYou';
import UpdatedFriendsRecommendCard from './UpdatedFriendsRecommendCard';


const UpdatedFriendsRecommend = () => {
  const [recommend, setRecommend] = useState([]);

  const [myHashtagList, setMyHashtagList] = useState([]);
  const [g, setg] = useState(0);
  const getMyHashtagList = async () => {
    const res = await axios.get(
      `${APIURL}/profile/hashtag/get_hashtag/${getCookie("user_id")}}/`
    );
  
    if (res.status == 200) {
      const temp = [];
  
      for (let i = 0; i < res.data.length; i++) {
        temp.push(res.data[i].hashtag_name);
      }
  
      setMyHashtagList(temp);
      setg(1)
      console.log("get hashtag success");
    } else {
      console.log("get hashtag fail");
    }
  };

  useEffect(()=>{
    getMyHashtagList()
  }, [g])
  return (
    <>
        <section>
            <UpdatedFriendsRecommendToYou></UpdatedFriendsRecommendToYou>
            <UpdatedFriendsRecommendCardContainer>
              {myHashtagList[0]  && <UpdatedFriendsRecommendCard user={myHashtagList[0]}></UpdatedFriendsRecommendCard>}
              {myHashtagList[1]  && <UpdatedFriendsRecommendCard user={myHashtagList[1]}></UpdatedFriendsRecommendCard>}
              {myHashtagList[2]  && <UpdatedFriendsRecommendCard user={myHashtagList[2]}></UpdatedFriendsRecommendCard>}
              {myHashtagList[3]  && <UpdatedFriendsRecommendCard user={myHashtagList[3]}></UpdatedFriendsRecommendCard>}
              {myHashtagList[4]  && <UpdatedFriendsRecommendCard user={myHashtagList[4]}></UpdatedFriendsRecommendCard>}
            </UpdatedFriendsRecommendCardContainer>
        </section>
    </>
  );
};

export default React.memo(UpdatedFriendsRecommend);