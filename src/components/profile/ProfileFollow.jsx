import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";

import {
  FollowDiv,
  FanIdolDiv,
  FanIdolSmallDiv,
  FanIdolText,
  FanIdolNum,
  FollowBtn,
} from "../../styledComponents";
import MyFanPopup from "./popup/MyFanPopup";
import MyIdolPopup from "./popup/MyIdolPopup";

const ProfileFollow = () => {
  const { isAdmin } = useOutletContext();
  const params = useParams();
  const id = params.user_id;
  const [fanClick, setFanClick] = useState(false);
  const [idolClick, setIdolClick] = useState(false);
  const [isFollowed, setIsFollowd] = useState(false);

  const [fans, setFans] = useState([]);
  const [idols, setIdols] = useState([]);

  const clickFan = () => {
    setFanClick(true);
  };

  const clickIdol = () => {
    setIdolClick(true);
  };

  const getFan = async () => {
    const res = await axios.get(`${APIURL}/profile/follow/${id}/get_follower/`);
    setFans(res.data);
    console.log(res.data);
  };

  const getIdols = async () => {
    const res = await axios.get(
      `${APIURL}/profile/follow/${id}/get_following/`
    );
    setIdols(res.data);
    console.log(res.data);
  };

  const onFollow = async () => {
    const follower = getCookie("user_id");

    if (!follower) {
      alert("로그인이 필요합니다!");
      return;
    }

    const res = await axios.post(`${APIURL}/profile/follow/`, {
      follower,
      following: id,
    });

    if (res.status == 201) {
      alert("나의 아이돌에 추가되었습니다.");
    } else if (res.status == 204) {
      alert("나의 아이돌에서 삭제되었습니다.");
    }
  };

  const checkFollowed = async () => {
    const res = await axios.get(`${APIURL}/profile/isfollow/${id}/`);

    console.log("isFollowed: ", res);

    if (res.status == 200) {
      if (res.data.is_follow == "True") {
        setIsFollowd(true);
      } else {
        setIsFollowd(false);
      }
    }
  };

  useEffect(() => {
    setFanClick(false);
    setIdolClick(false);
    getFan()
      .then(() => {
        getIdols();
      })
      .then(() => {
        if (!isAdmin) {
          checkFollowed();
        }
      });
  }, [id]);

  const navigate = useNavigate();
  const goUserProfile = (e, user_id) => {
    navigate(`/profile/${user_id}`);
  };

  return (
    <>
      {fanClick && (
        <MyFanPopup
          goUserProfile={goUserProfile}
          setPopup={setFanClick}
          fans={fans}
        />
      )}
      {idolClick && (
        <MyIdolPopup
          goUserProfile={goUserProfile}
          setPopup={setIdolClick}
          idols={idols}
        />
      )}

      <FollowDiv>
        <FanIdolDiv>
          <FanIdolSmallDiv onClick={clickFan}>
            <FanIdolText>FAN</FanIdolText>
            <FanIdolNum>{fans.length}</FanIdolNum>
          </FanIdolSmallDiv>

          <FanIdolSmallDiv onClick={clickIdol}>
            <FanIdolText>IDOL</FanIdolText>
            <FanIdolNum>{idols.length}</FanIdolNum>
          </FanIdolSmallDiv>
        </FanIdolDiv>

        {!isAdmin && (
          <FollowBtn
            onClick={() => {
              onFollow().then(() => {
                window.location.reload();
              });
            }}
          >
            {/* IDOL 등록 */}
            {isFollowed ? <>IDOL 해제</> : <>IDOL 등록</>}
          </FollowBtn>
        )}
      </FollowDiv>
    </>
  );
};

export default React.memo(ProfileFollow);
