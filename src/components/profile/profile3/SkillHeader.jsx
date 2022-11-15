import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  ProfileSkillEditBtn,
  ProfileSkillEditBtnDiv,
  ProfileSkillHeader,
  ProfileSkillName,
} from "../../../styledComponents";
import { faPen, faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useOutletContext } from "react-router-dom";
import SkillEditPopup from "../popup/SkillEditPopup";

const SkillHeader = ({ skill_name, skill_type }) => {
  const { isAdmin } = useOutletContext();
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const goPost = () => {
    navigate("write");
  };
  return (
    <>
      {isEdit && (
        <SkillEditPopup
          setPopup={setIsEdit}
          name={skill_name}
          type={skill_type}
        />
      )}
      <ProfileSkillHeader>
        <ProfileSkillName>
          {skill_type} - {skill_name}
        </ProfileSkillName>

        {isAdmin && (
          <ProfileSkillEditBtnDiv>
            <ProfileSkillEditBtn onClick={goPost}>
              <FontAwesomeIcon icon={faPen} />
            </ProfileSkillEditBtn>

            <ProfileSkillEditBtn>
              <FontAwesomeIcon icon={faGear} onClick={() => setIsEdit(true)} />
            </ProfileSkillEditBtn>
          </ProfileSkillEditBtnDiv>
        )}
      </ProfileSkillHeader>
    </>
  );
};

export default React.memo(SkillHeader);
