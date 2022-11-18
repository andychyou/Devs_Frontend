import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser,faBell,faGear,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCookie, getCookie, removeCookie } from "../../config/cookie";
import { APIURL } from '../../config/key';
import axios from 'axios';
import { SearchResultDiv, SearchResultImg, SearchResultDetail, SearchResultIntroBox, SearchResultButton } from '../../styledComponents';


const SearchResultCard = ({id}) => {
  const [userInfo, setUserInfo] = useState({})
  const getUserInfo = async () => {
    const res = await axios.get(`${APIURL}/account/user/${id}`);
    if (res.status == 200) {
      console.log("get user info: ", res.data);
      setUserInfo(res.data);
    } else {
      console.log("get user info fail");
    }
  };
  const [profile, setProfile] = useState({})
  const getProfile = async () => {
    const res = await axios.get(`${APIURL}/profile/profile/${id}/`)
    if (res.status == 200) {
      setProfile(res.data);
    } else {
      console.log("get profile fail");
    }
  };

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
  

  useEffect(()=>{
  getUserInfo()
  getProfile()
  },[id])

  return (
    <SearchResultDiv>
    <SearchResultImg src={userInfo.image}></SearchResultImg>         
      <SearchResultDetail>
          <div style={{fontSize: '30px', fontWeight: '700'}}>{userInfo.name}</div>
          <div>
            <span style={{fontSize: '24px'}}>{profile.main_position}</span>
            <span style={{fontSize: '24px'}}>@ {profile.belong}</span>
          </div>              
          <div style={{fontSize: '24px'}}>{profile.major}</div>
      </SearchResultDetail>
      <SearchResultIntroBox>
        <p>
          {profile.introduction}
        </p>
      </SearchResultIntroBox>
      
      <SearchResultButton onClick={onFollow}>
          IDOL 등록
      </SearchResultButton>
    </SearchResultDiv>
  );
};

export default React.memo(SearchResultCard);
