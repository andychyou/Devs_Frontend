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
      setUserInfo(res.data);
    } else {
      console.log("get user info fail");
    }
  };
  useEffect(()=>{
    getUserInfo()
  },[])

  const onFollow = async () => {
    const follower = getCookie("user_id");

    if (!follower) {
      alert("로그인이 필요합니다!");
      return;
    }

    const res = await axios.post(`${APIURL}/profile/follow/`, {
      follower,
      following: userInfo.id,
    });

    if (res.status == 201) {
      alert("나의 아이돌에 추가되었습니다.");
    } else if (res.status == 204) {
      alert("나의 아이돌에서 삭제되었습니다.");
    }
  };
  return (
    <>
        <UpdatedFriendsRecommendCardDiv>
            <UpdatedFriendsRecommendCardImg src={userInfo.image}></UpdatedFriendsRecommendCardImg>
            <UpdatedFriendsRecommendCardName>{userInfo.name}</UpdatedFriendsRecommendCardName>
            <div onClick={onFollow}><UpdatedFriendsRecommendCardIdolButton>idol 등록</UpdatedFriendsRecommendCardIdolButton></div>
        </UpdatedFriendsRecommendCardDiv>
    </>
  );
};

export default React.memo(UpdatedFriendsRecommendCard);