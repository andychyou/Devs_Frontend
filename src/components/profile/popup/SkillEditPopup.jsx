import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCookie } from "../../../config/cookie";
import { APIURL } from "../../../config/key";
import {
  PopupBox,
  PopupDiv,
  PostBtn,
  PostBtnDiv,
} from "../../../styledComponents";
import DropDown from "./DropDown";
import PopupHeader from "./PopupHeader";
import PopupInputComp from "./PopupInputComp";

const SkillEditPopup = ({ setPopup, name, type }) => {
  const [skill, setSkill] = useState(name);
  const [category, setCategory] = useState(
    type === "Programming Languages" ? "pl" : "fl"
  );
  const params = useParams();
  const id = params.id;

  const onChange = (e) => {
    const { name, value } = e.target;
    setSkill(value);
  };

  const onPatch = async () => {
    if (!skill || !category || category === "선택") {
      alert("모든 정보를 입력해주세요!");
      return;
    }
    const body = {
      profile: getCookie("user_id"),
      skill_name: skill,
      skill_type: category,
    };
    console.log(body);
    const res = await axios.patch(`${APIURL}/profile/skill/${id}/`, body, {
      headers: {
        Authorization: "token " + getCookie("token"),
      },
    });

    if (res.status == 200) {
      setPopup(false);
      //   window.location.reload();
      window.location.replace(
        `/profile/${params.user_id}/${category}/${skill}/${id}`
      );
    }
  };

  const onDelete = async () => {
    const res = await axios.delete(`${APIURL}/profile/skill/${id}/`, {
      headers: {
        Authorization: "token " + getCookie("token"),
      },
    });

    if (res.status == 204) {
      window.location.replace(`/profile/${getCookie("user_id")}`);
    }
  };

  return (
    <>
      <PopupDiv>
        <PopupBox style={{ paddingBottom: "80px" }}>
          <PopupHeader setPopup={setPopup} text="기술스택 설정" />

          <DropDown setCategory={setCategory} category={category} />
          <PopupInputComp
            onChange={onChange}
            text="기술스택 명"
            name="skill"
            value={skill}
            placeholder="ex) JavaScript"
          />

          <PostBtnDiv size="big">
            <PostBtn size="big" onClick={onPatch}>
              수정
            </PostBtn>
            <PostBtn size="big" type="delete" onClick={onDelete}>
              삭제
            </PostBtn>
          </PostBtnDiv>
        </PopupBox>
      </PopupDiv>
    </>
  );
};

export default SkillEditPopup;
