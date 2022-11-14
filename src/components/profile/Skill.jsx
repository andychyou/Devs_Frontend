import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";
import {
  DescContentsDiv,
  DescDiv,
  SkillContents,
  SkillDiv,
  SkillHeadDiv,
  SkillSetDiv,
} from "../../styledComponents";
import DescHead from "./DescHead";
import SkillPopup from "./popup/SkillPopup";

const Skill = memo(() => {
  const params = useParams();
  const id = params.user_id;
  // id, profile, skill_name, skill_type
  const [lang, setLang] = useState([]);
  const [frw, setFrw] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

  const getFL = async () => {
    const res = await axios.get(`${APIURL}/profile/skill/get_fl/${id}`);

    setFrw(res.data);
  };
  const getPL = async () => {
    const res = await axios.get(`${APIURL}/profile/skill/get_pl/${id}`);

    setLang(res.data);
  };

  useEffect(() => {
    getPL().then(() => {
      getFL();
    });
  }, [id]);

  const navigate = useNavigate();
  const onClick = (e, category, name, id) => {
    let _name = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i] === "/") {
        _name += "&";
      } else if (name[i] === " ") {
        continue;
      } else {
        _name += name[i];
      }
    }
    navigate(`${category}/${_name}/${id}`);
  };

  return (
    <>
      {isAdd && <SkillPopup setPopup={setIsAdd} />}
      <DescDiv>
        <DescHead text="기술스택/Skill Set" setPopup={setIsAdd} />

        <DescContentsDiv>
          <SkillSetDiv>
            <SkillHeadDiv>Programming Languages</SkillHeadDiv>
            <SkillContents>
              {lang.map((data) => (
                <SkillDiv
                  key={data.id}
                  onClick={(e) => onClick(e, "pl", data.skill_name, data.id)}
                >
                  {data.skill_name}
                </SkillDiv>
              ))}
            </SkillContents>

            <SkillHeadDiv>Framework / Library</SkillHeadDiv>
            <SkillContents>
              {frw.map((data) => (
                <SkillDiv
                  key={data.id}
                  onClick={(e) => onClick(e, "fl", data.skill_name, data.id)}
                >
                  {data.skill_name}
                </SkillDiv>
              ))}
            </SkillContents>
          </SkillSetDiv>
        </DescContentsDiv>
      </DescDiv>
    </>
  );
});

export default Skill;
