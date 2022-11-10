import React, { memo } from "react";
import {
  ProfileTextDiv,
  ProfileName,
  ProfileEditBtn,
  ProfileDesc,
} from "../../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import axios from "axios";
import { APIURL } from "../../config/key";
import { getCookie } from "../../config/cookie";
import { useState } from "react";
import ImgPopup from "./popup/ImgPopup";

const ProfileText = memo(({ name, email, id }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit && (
        <ImgPopup setPopup={setIsEdit} name={name} email={email} id={id} />
      )}
      <ProfileTextDiv>
        <ProfileName>
          {name}
          <ProfileEditBtn onClick={() => setIsEdit(true)}>
            <FontAwesomeIcon icon={faGear} />
          </ProfileEditBtn>
        </ProfileName>
        <ProfileDesc>{id}</ProfileDesc>
        <ProfileDesc>{email}</ProfileDesc>
      </ProfileTextDiv>
    </>
  );
});

export default ProfileText;
