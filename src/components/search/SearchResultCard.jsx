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
  useEffect(()=>{
  console.log('id',id)
  getUserInfo()
  },[])
  return (
    <SearchResultDiv>
    <SearchResultImg src={userInfo.image}></SearchResultImg>         
      <SearchResultDetail>
          <div style={{fontSize: '30px', fontWeight: '700'}}>{userInfo.name}</div>
          <div>
            <span style={{fontSize: '24px'}}>Frontend</span>
            <span style={{fontSize: '24px'}}>@ job</span>
          </div>              
          <div style={{fontSize: '24px'}}>school</div>
      </SearchResultDetail>
      <SearchResultIntroBox>
        <p>
          axios get intro
        </p>
      </SearchResultIntroBox>
      
      <SearchResultButton>
          IDOL 등록
      </SearchResultButton>
    </SearchResultDiv>
  );
};

export default React.memo(SearchResultCard);