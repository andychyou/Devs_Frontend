import React, { useEffect, useState } from "react";
import { MainTitle, NavAccountSpan, NavBar, NavBarContainer, NavIconsContainer, NavSearchbar, NavSearchButton, SubTitle } from '../../styledComponents';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCookie, getCookie, removeCookie } from "../../config/cookie";

const NavigationBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    if(getCookie('user_id')){
      setIsLogin(true)
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

  if (location === "/" || location === "/login") {
    return <></>;
  }

  return (
    <>

      <NavBar>
        <div  onClick={goMain}>
          <MainTitle href="#">
            뎁스
          </MainTitle>
          <SubTitle href="#">
            devStory
          </SubTitle>
        </div>

        <div style={{ width:'400px'}}>
          <NavSearchbar type='text' placeholder="Search"></NavSearchbar>
          <NavSearchButton>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </NavSearchButton>
        </div>
        
        
    

        {isLogin ? (
          <NavIconsContainer>
            <span class="nav-icon material-symbols-outlined">notifications</span>
            <span class="nav-icon material-symbols-outlined">home</span>
            <span class="nav-icon material-symbols-outlined">settings</span>

            <img
              className="profile-pic"
              // src={require("./search/profile-img.png")}
              src={getCookie('user_img')}
              onClick={goProfile}
            />

            <NavAccountSpan>로그아웃</NavAccountSpan>
          </NavIconsContainer>
        ) : (
          <NavIconsContainer style={{width:"300px", marginLeft: 'auto', marginRight: '0'}}>
            <NavAccountSpan>로그인</NavAccountSpan>
            <NavAccountSpan>회원가입</NavAccountSpan>
          </NavIconsContainer>
        )}

      </NavBar>

    </>
  );
};

export default React.memo(NavigationBar);
