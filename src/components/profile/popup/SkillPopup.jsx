import axios from "axios";
import React, { useState } from "react";
import { getCookie } from "../../../config/cookie";
import { APIURL } from "../../../config/key";
import { PopupBox, PopupDiv, PopupSaveBtn } from "../../../styledComponents";
import DropDown from "./DropDown";
import PopupHeader from "./PopupHeader";
import PopupInputComp from "./PopupInputComp";

const SkillPopup = ({ setPopup }) => {
  const [skill, setSkill] = useState("");
  const [category, setCategory] = useState("선택");

  const onChange = (e) => {
    const { value } = e.target;

    setSkill(value);
  };

  const postSkill = async () => {
    if (!skill || !category || category === "선택") {
      alert("모든 정보를 입력해주세요!");
      return;
    }

    const res = await axios.post(`${APIURL}/profile/skill/`, {
      profile: getCookie("user_id"),
      skill_name: skill,
      skill_type: category,
    });

    if (res.status == 201) {
      setPopup(false);
      window.location.reload();
    }
  };
  return (
    <PopupDiv>
      <PopupBox style={{ paddingBottom: "80px" }}>
        <PopupHeader setPopup={setPopup} text="기술스택 카테고리 추가" />
        <DropDown setCategory={setCategory} category={category} />

        <PopupInputComp
          name="skill"
          value={skill}
          onChange={onChange}
          text="기술스택 명"
          placeholder="ex) JavaScript"
        />

        <PopupSaveBtn onClick={postSkill}>추가하기</PopupSaveBtn>
      </PopupBox>
    </PopupDiv>
  );
};

export default SkillPopup;
