import React, { useEffect, useState } from "react";
import { MainTitle, NavAccountSpan, NavBar, NavSearchInput, NavIconsContainer, NavSearchbar, NavSearchButton, SubTitle, TitleWrap } from '../../styledComponents';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser,faBell,faGear,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCookie, getCookie, removeCookie } from "../../config/cookie";
import { APIURL } from '../../config/key';
import axios from 'axios';

const NavigationBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    if(getCookie('user_id')){
      setIsLogin(true)
      getUserInfo()
    } else {
      setIsLogin(false)
    }
  }, [getCookie('user_id')])

  const navigate = useNavigate();
  const goProfile = () => {
    navigate(`/profile/${getCookie('user_id')}`);
  };

  const goMain = () => {
    navigate("/main");
  };
  const goLogin = () => {
    navigate('/login');
  }
  const goRegister = () => {
    navigate('/');
  }
  const goSearchResult = () =>{
    navigate("/searchresult", {state: {searchResult}})
  }
  const goLogout = () => {
    const keys = Object.keys(getAllCookie());
    for(let i=0; i<keys.length; i++){
      if(keys[i] !== 'csrftoken'){
        removeCookie(keys[i]);
      }
    }
    

    setTimeout(() => {
      window.location.replace('/login')
    }, 500);
    
  }
  const [userInfo, setUserInfo] = useState({});
  const getUserInfo = async () => {
    const res = await axios.get(`${APIURL}/account/user/${getCookie('user_id')}`);
    if (res.status == 200) {
      setUserInfo(res.data);
    } else {
      console.log("get user info fail");
    }
  };
  
  const [searchResult, setSearchResult] = useState({})
  const Search = async () => {
    const res = await axios.get(`${APIURL}/search/${keyword}`);
    if (res.status == 200) {
      setSearchResult(res.data);
      if(searchResult){
        goSearchResult()
      }
    } else {
      console.log("get user info fail");
    }
  };

  console.log('searchresult', searchResult)


  const [keyword, setKeyword] = useState("")
  const onChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  if (location === "/" || location === "/login") {
    return <></>;
  }

  return (
    <>

      <NavBar>
        <TitleWrap onClick={goMain}>
          <MainTitle href="#">
            뎁스
          </MainTitle>
          <SubTitle href="#">
            devStory
          </SubTitle>
        </TitleWrap>

        <NavSearchbar>
          <NavSearchInput onChange={onChange} name='search' type='text' placeholder="Search"></NavSearchInput>
          <NavSearchButton onClick={Search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </NavSearchButton>
        </NavSearchbar>

        {isLogin ? (
          <NavIconsContainer>
            <div onClick={goMain}><FontAwesomeIcon style={{cursor: 'pointer'}}size="2x" icon={faHouseUser} /></div>
            <FontAwesomeIcon style={{cursor: 'pointer'}}size="2x"icon={faBell} />
            <FontAwesomeIcon style={{cursor: 'pointer'}}size="2x"icon={faGear} />

            <img style={{width:"40px", borderRadius:"50%",cursor: 'pointer'}}
              className="profile-pic"
              src={userInfo.image}
              // src={getCookie('user_img')}
              onClick={goProfile}
            />

            <NavAccountSpan onClick={goLogout}>로그아웃</NavAccountSpan>
          </NavIconsContainer>
        ) : (
          <NavIconsContainer >
            <NavAccountSpan style={{marginLeft:"130px"}}onClick={goLogin}>로그인</NavAccountSpan>
            <NavAccountSpan onClick={goRegister}>회원가입</NavAccountSpan>
          </NavIconsContainer>
        )}

      </NavBar>

    </>
  );
};

export default React.memo(NavigationBar);
