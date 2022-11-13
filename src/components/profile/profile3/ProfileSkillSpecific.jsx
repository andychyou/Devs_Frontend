import React from "react";
import { ProfileSkillSpecificDiv } from "../../../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const ProfileSkillSpecific = ({ title }) => {
  return (
    <ProfileSkillSpecificDiv>
      <FontAwesomeIcon
        style={{ marginRight: "20px" }}
        icon={faClipboardCheck}
        size="xl"
      ></FontAwesomeIcon>
      <p>{title}</p>
    </ProfileSkillSpecificDiv>
  );
};

export default React.memo(ProfileSkillSpecific);
