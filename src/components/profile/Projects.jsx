import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIURL } from "../../config/key";
import {
  DescContentsDiv,
  DescDiv,
  ProjectBox,
  ProjectDiv,
  ProjectName,
  ProjectTextDiv,
  ProjectTextLabel,
  ProjectText,
  ProjectTextWrap,
} from "../../styledComponents";
import DescHead from "./DescHead";
import ProjectPopup from "./popup/ProjectPopup";
import Project from "./Project";

const Projects = () => {
  const params = useParams();
  const id = params.user_id;
  const [isAdd, setIsAdd] = useState(false);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const res = await axios.get(`${APIURL}/profile/project/${id}/`);

    console.log(res.data);
    setProjects(res.data);
  };

  useEffect(() => {
    getProjects();
  }, [id]);

  return (
    <>
      {isAdd && <ProjectPopup setPopup={setIsAdd} />}
      <DescDiv>
        <DescHead text="프로젝트" setPopup={setIsAdd} />

        <DescContentsDiv>
          <ProjectDiv>
            {projects.length === 0 ? (
              <div>아직 프로젝트가 없어요!</div>
            ) : (
              <>
                {projects.map((data) => (
                  <Project key={data.id} data={data} />
                ))}
              </>
            )}
          </ProjectDiv>
        </DescContentsDiv>
      </DescDiv>
    </>
  );
};

export default Projects;
