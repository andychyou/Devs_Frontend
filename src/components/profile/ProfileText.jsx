import React, { memo } from "react";
import {
  ProfileTextDiv,
  ProfileName,
  ProfileEditBtn,
  ProfileDesc,
} from "../../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import axios from "axios";
import { APIURL } from "../../config/key";
import { getCookie } from "../../config/cookie";
import { useState } from "react";
import ImgPopup from "./popup/ImgPopup";
import { useOutletContext } from "react-router-dom";

const ProfileText = memo(({ name, email, id, link }) => {
  const { isAdmin } = useOutletContext();
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit && (
        <ImgPopup
          setPopup={setIsEdit}
          name={name}
          email={email}
          id={id}
          link={link}
        />
      )}
      <ProfileTextDiv>
        <ProfileName>
          {name}
          {isAdmin && (
            <ProfileEditBtn onClick={() => setIsEdit(true)}>
              <FontAwesomeIcon icon={faGear} />
            </ProfileEditBtn>
          )}
        </ProfileName>
        <ProfileDesc>{id}</ProfileDesc>
        <ProfileDesc>{email}</ProfileDesc>
        <ProfileDesc>
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              width: "20px",
              height: "20px",
              marginRight: "5px",
            }}
          />
          <a href={link} target="_blank">
            {link}
          </a>
        </ProfileDesc>
      </ProfileTextDiv>
    </>
  );
});

export default ProfileText;
