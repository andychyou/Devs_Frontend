import React from "react";
import {
  ProjectBox,
  ProjectName,
  ProjectText,
  ProjectTextDiv,
  ProjectTextLabel,
  ProjectTextWrap,
} from "../../styledComponents";

// id(=pk), profile, project_name,
// position, skill, coworker, start_date, end_date, detail
const Project = ({ data }) => {
  return (
    <>
      <ProjectBox>
        <ProjectName>{data.project_name}</ProjectName>

        <ProjectTextWrap>
          <ProjectTextDiv>
            <ProjectTextLabel type="position">담당</ProjectTextLabel>
            <ProjectText>{data.position}</ProjectText>
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
