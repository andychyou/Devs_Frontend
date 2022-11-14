import React, { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../../config/key";
import {
  ProfileImg,
  ProfileImgDiv,
  ProfileImgEditBtn,
  ProfileImgIcon,
} from "../../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../config/cookie";

const ProfileImage = ({ image }) => {
  return (
    <>
      <ProfileImgDiv>
        {image == null ? (
          <ProfileImgIcon>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: "80px" }} />
          </ProfileImgIcon>
        ) : (
          <ProfileImg src={image} />
        )}
      </ProfileImgDiv>
    </>
  );
};

export default React.memo(ProfileImage);
