import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
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

  useEffect(() => {
    setFanClick(false);
    setIdolClick(false);
    getFan().then(() => {
      getIdols();
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

        {!isAdmin && <FollowBtn>IDOL 등록</FollowBtn>}
      </FollowDiv>
    </>
  );
};

export default React.memo(ProfileFollow);
