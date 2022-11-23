import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faBell,
  faGear,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCookie, getCookie, removeCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";
import {
  SearchResultDiv,
  SearchResultImg,
  SearchResultDetail,
  SearchResultIntroBox,
  SearchResultButton,
  SearchResultDivParent,
  SearchResultText,
  SearchResultIntro,
} from "../../styledComponents";
import { myAxios } from "../../config/axios";

const SearchResultCard = ({ id }) => {
  const [userInfo, setUserInfo] = useState({});
  const getUserInfo = async () => {
    const res = await myAxios.get(`${APIURL}/account/user/${id}`);
    if (res.status == 200) {
      // console.log("get user info: ", res.data);
      setUserInfo(res.data);
    } else {
      console.log("get user info fail");
    }
  };
  const [profile, setProfile] = useState({});
  const getProfile = async () => {
    const res = await myAxios.get(`${APIURL}/profile/profile/${id}/`);
    if (res.status == 200) {
      let intro = res.data.introduction;
      if (intro) {
        if (intro.indexOf("\n") !== -1) {
          intro = intro.split("\n")[0];
          intro = intro + "\n" + "...";
        }

        const size = 40;
        if (intro.length > size) {
          intro = intro.substr(0, size);
          intro += "...";
        }
      }
      res.data.introduction = intro;
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

    const res = await myAxios.post(`${APIURL}/profile/follow/`, {
      follower,
      following: userInfo.id,
    });

    if (res.status == 201) {
      alert("나의 아이돌에 추가되었습니다.");
    } else if (res.status == 204) {
      alert("나의 아이돌에서 삭제되었습니다.");
    }
    checkFollowed();
  };
  const [isFollowd, setIsFollowd] = useState();
  const checkFollowed = async () => {
    const res = await myAxios.get(`${APIURL}/profile/isfollow/${id}/`);
    if (res.status == 200) {
      // console.log(`${getCookie('user_id')} followed `,res.data)
      if (res.data.is_follow) {
        setIsFollowd(true);
      } else {
        setIsFollowd(false);
      }
    }
  };
  useEffect(() => {
    getUserInfo();
    getProfile();
  }, [id]);

  useEffect(() => {
    checkFollowed();
    // console.log("is followedddd", isFollowd)
  }, [isFollowd]);

  // console.log("is followed", isFollowd)
  const navigate = useNavigate();
  const goProfile = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <SearchResultDivParent>
      <SearchResultDiv onClick={goProfile}>
        <SearchResultImg src={userInfo.image} />

        <SearchResultDetail>
          <SearchResultText type="name">{userInfo.name}</SearchResultText>
          <SearchResultText>{profile.main_position}</SearchResultText>
          {/* <div
            style={{
              height: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ fontSize: "16px", fontWeight: "700" }}>
              {userInfo.name}
            </div>
            <div>
              <span style={{ fontSize: "18px" }}>
                {profile.main_position == undefined ? (
                  <span></span>
                ) : (
                  profile.main_position
                )}
              </span>
            </div>
            <div style={{ fontSize: "18px" }}>
              {profile.major == undefined ? <span></span> : profile.major}
            </div>
          </div> */}
        </SearchResultDetail>
        <SearchResultIntroBox>
          {profile.introduction == undefined ? (
            <span></span>
          ) : (
            <SearchResultIntro>{profile.introduction}</SearchResultIntro>
          )}
        </SearchResultIntroBox>
      </SearchResultDiv>
      <SearchResultButton onClick={onFollow}>
        {isFollowd === false ? <div>IDOL 등록</div> : <div>IDOL 삭제</div>}
      </SearchResultButton>
    </SearchResultDivParent>
  );
};

export default React.memo(SearchResultCard);
