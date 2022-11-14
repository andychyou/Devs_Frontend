import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import {
  FollowDiv,
  FanIdolDiv,
  FanIdolSmallDiv,
  FanIdolText,
  FanIdolNum,
  FollowBtn,
} from "../../styledComponents";

const ProfileFollow = ({ setFan, setIdol }) => {
  const { isAdmin } = useOutletContext();
  const clickFan = () => {
    setFan(true);
  };

  const clickIdol = () => {
    setIdol(true);
  };

  return (
    <>
      <FollowDiv>
        <FanIdolDiv>
          <FanIdolSmallDiv onClick={clickFan}>
            <FanIdolText>FAN</FanIdolText>
            <FanIdolNum>10</FanIdolNum>
          </FanIdolSmallDiv>

          <FanIdolSmallDiv onClick={clickIdol}>
            <FanIdolText>IDOL</FanIdolText>
            <FanIdolNum>10</FanIdolNum>
          </FanIdolSmallDiv>
        </FanIdolDiv>

        {!isAdmin && <FollowBtn>IDOL 등록</FollowBtn>}
      </FollowDiv>
    </>
  );
};

export default React.memo(ProfileFollow);
