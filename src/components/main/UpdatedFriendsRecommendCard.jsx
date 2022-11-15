import React from 'react';
import { UpdatedFriendsRecommendCardDiv, UpdatedFriendsRecommendCardImg, UpdatedFriendsRecommendCardName, UpdatedFriendsRecommendCardIdolButton} from '../../styledComponents';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import axios from 'axios';

const UpdatedFriendsRecommendCard = ({user}) => {
  const [userInfo, setUserInfo] = useState({})
  const [g, setg] = useState(0)

  const getUserInfo = async () => {
    const res = await axios.get(`${APIURL}/account/user/${user.id}`);

    if (res.status == 200) {
      console.log("get user info: ", res.data);
      setUserInfo(res.data);
      setUserInfo(1);
    } else {
      console.log("get user info fail");
    }
  };
  useEffect(()=>{
    getUserInfo()
  },[g])
  return (
    <>
        <UpdatedFriendsRecommendCardDiv>
            <UpdatedFriendsRecommendCardImg src={userInfo.image}></UpdatedFriendsRecommendCardImg>
            <UpdatedFriendsRecommendCardName>{userInfo.name}</UpdatedFriendsRecommendCardName>
            <UpdatedFriendsRecommendCardIdolButton>idol 등록</UpdatedFriendsRecommendCardIdolButton>
        </UpdatedFriendsRecommendCardDiv>
    </>
  );
};

export default React.memo(UpdatedFriendsRecommendCard);