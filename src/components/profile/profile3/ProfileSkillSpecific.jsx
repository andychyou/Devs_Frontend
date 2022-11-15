import React, { useEffect, useState } from "react";
import {
  ProfileSkillSpecificDate,
  ProfileSkillSpecificDiv,
  ProfileSkillSpecificTitle,
} from "../../../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ProfileSkillSpecific = ({ detail }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(moment(detail.created_at).format("YYYY년 MM월 DD일 HH:mm"));
  }, []);

  const navigate = useNavigate();
  const onClick = () => {
    navigate(`${detail.id}`);
  };

  return (
    <ProfileSkillSpecificDiv onClick={onClick}>
      <FontAwesomeIcon
        style={{ marginRight: "20px" }}
        icon={faClipboardCheck}
        size="xl"
      ></FontAwesomeIcon>
      <ProfileSkillSpecificTitle>
        {detail.skill_detail}
      </ProfileSkillSpecificTitle>

      <ProfileSkillSpecificDate>{date}</ProfileSkillSpecificDate>
    </ProfileSkillSpecificDiv>
  );
};

export default React.memo(ProfileSkillSpecific);
