import React, { useState } from "react";
import {
  ProjectBox,
  ProjectName,
  ProjectText,
  ProjectTextDiv,
  ProjectTextLabel,
  ProjectTextWrap,
} from "../../styledComponents";
import ProjectPopup from "./popup/ProjectPopup";

// id(=pk), profile, project_name,
// position, skill, coworker, start_date, end_date, detail
const Project = ({ data }) => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      {popup && (
        <ProjectPopup
          setPopup={setPopup}
          text="프로젝트 상세"
          isCreate={false}
          id={data.id}
        />
      )}
      <ProjectBox onClick={() => setPopup(true)}>
        <ProjectName>{data.project_name}</ProjectName>

        <ProjectTextWrap>
          <ProjectTextDiv>
            <ProjectTextLabel type="position">담당</ProjectTextLabel>
            <ProjectText type="position">{data.position}</ProjectText>
          </ProjectTextDiv>

          <ProjectTextDiv>
            <ProjectTextLabel type="skill">기술스택</ProjectTextLabel>
            <ProjectText>{data.skill}</ProjectText>
          </ProjectTextDiv>
        </ProjectTextWrap>
      </ProjectBox>
    </>
  );
};

export default Project;
