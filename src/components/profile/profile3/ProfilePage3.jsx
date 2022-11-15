import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import {
  ProfileContentSection,
  ProfileSkillDiv,
  ProfileSkillHeader,
  ProfileSkillSpecificDiv,
  ProfileSkillName,
  ProfileSkillEditBtn,
  ProfileSkillDetailEmptyDiv,
} from "../../../styledComponents";
import SkillHeader from "./SkillHeader";
import ProfileSkillSpecific from "./ProfileSkillSpecific";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../../../config/key";

const ProfilePage3 = () => {
  const params = useParams();
  const category = params.category;
  const name = params.name;
  const id = params.id;
  const user_id = params.user_id;
  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    const res = await axios.get(`${APIURL}/profile/skilldetail/${id}/`);

    // console.log(res);
    setDetails(res.data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <ProfileContentSection>
        <ProfileSkillDiv>
          <SkillHeader
            skill_name={name}
            skill_type={
              category === "pl"
                ? "Programming Languages"
                : "Framework / Library"
            }
          />

          {details.length === 0 ? (
            <ProfileSkillDetailEmptyDiv>
              등록된 게시물이 없습니다.
            </ProfileSkillDetailEmptyDiv>
          ) : (
            <>
              {details.map((detail) => (
                <ProfileSkillSpecific key={detail.id} detail={detail} />
              ))}
            </>
          )}
        </ProfileSkillDiv>
      </ProfileContentSection>
    </>
  );
};

export default React.memo(ProfilePage3);
