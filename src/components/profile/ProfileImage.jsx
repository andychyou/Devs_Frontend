import React from "react";
import { ProfileImg, ProfileImgDiv } from "../../styledComponents";

const ProfileImage = ({ image }) => {
  return (
    <>
      <ProfileImgDiv>
        <ProfileImg src={image} />
      </ProfileImgDiv>
    </>
  );
};

export default React.memo(ProfileImage);
