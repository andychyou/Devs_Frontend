import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  ProfileSkillEditBtn,
  ProfileSkillHeader,
  ProfileSkillName,
} from "../../../styledComponents";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SkillHeader = ({ skill_name, skill_type }) => {
  const navigate = useNavigate();
  const goPost = () => {
    navigate("write");
  };
  return (
    <ProfileSkillHeader>
      <ProfileSkillName>
        {skill_type} - {skill_name}
      </ProfileSkillName>

      <ProfileSkillEditBtn onClick={goPost}>
        <FontAwesomeIcon icon={faPen} />
      </ProfileSkillEditBtn>
    </ProfileSkillHeader>
  );
};

export default React.memo(SkillHeader);
