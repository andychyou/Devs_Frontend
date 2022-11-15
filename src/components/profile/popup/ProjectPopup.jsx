import axios from "axios";
import React, { memo, useState } from "react";
import { getCookie } from "../../../config/cookie";
import { APIURL } from "../../../config/key";
import {
  PopupDiv,
  PopupBox,
  PopupHead,
  PopupText,
  PopupXMark,
  PopupInputDiv,
  PopupInputText,
  PopupInput,
  PopupDateDiv,
  PopupDateSmall,
  PopupDateText,
  PopupDateInputDiv,
  PopupDateInput,
  PopupTextarea,
  PopupSaveBtn,
} from "../../../styledComponents";

import PopupHeader from "./PopupHeader";
import PopupInputComp from "./PopupInputComp";

const ProjectPopup = memo(({ setPopup }) => {
  const [inputs, setInputs] = useState({
    name: "",
    position: "",
    skill: "",
    coworker: "",
    start_year: "",
    start_mon: "",
    end_year: "",
    end_mon: "",
    detail: "",
  });
  const {
    name,
    position,
    skill,
    coworker,
    start_mon,
    start_year,
    end_mon,
    end_year,
    detail,
  } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const postProject = async () => {
    const res = await axios.post(`${APIURL}/profile/project/`, {
      profile: getCookie("user_id"),
      project_name: name,
      detail,
      skill,
      position,
      coworker,
      start_date: start_year + "-" + start_mon + "-01",
      end_date: end_year + "-" + end_mon + "-01",
    });
  };

  const onClick = () => {
    if (
      !name ||
      !position ||
      !detail ||
      !skill ||
      !start_mon ||
      !start_year ||
      !end_mon ||
      !end_year ||
      !coworker
    ) {
      alert("모든 정보를 입력해주세요!");
      return;
    }

    postProject().then(() => {
      setPopup(false);
      window.location.reload();
    });
  };
  return (
    <PopupDiv>
      <PopupBox type="career">
        <PopupHeader setPopup={setPopup} text="프로젝트 추가하기" />

        <PopupInputComp
          onChange={onChange}
          name="name"
          value={name}
          text="프로젝트명"
        />
        <PopupInputComp
          onChange={onChange}
          name="position"
          value={position}
          text="담당"
        />
        <PopupInputComp
          onChange={onChange}
          name="skill"
          value={skill}
          text="사용한 기술 스택"
        />

        <PopupDateDiv>
          <PopupDateSmall>
            <PopupDateText>프로젝트 시작 일자</PopupDateText>
            <PopupDateInputDiv>
              <PopupDateInput
                onChange={onChange}
                name="start_year"
                value={start_year}
                placeholder="YEAR"
              />
              <PopupDateInput
                onChange={onChange}
                name="start_mon"
                value={start_mon}
                placeholder="MONTH"
              />
            </PopupDateInputDiv>
          </PopupDateSmall>
          <PopupDateSmall>
            <PopupDateText>프로젝트 종료 일자</PopupDateText>
            <PopupDateInputDiv>
              <PopupDateInput
                onChange={onChange}
                name="end_year"
                value={end_year}
                placeholder="YEAR"
              />
              <PopupDateInput
                onChange={onChange}
                name="end_mon"
                value={end_mon}
                placeholder="MONTH"
              />
            </PopupDateInputDiv>
          </PopupDateSmall>
        </PopupDateDiv>

        <PopupInputComp
          name="coworker"
          value={coworker}
          onChange={onChange}
          text="함께 한 동료"
        />

        <PopupInputDiv style={{ flexGrow: "3" }}>
          <PopupInputText>상세설명</PopupInputText>
          <PopupTextarea name="detail" value={detail} onChange={onChange} />
        </PopupInputDiv>

        <PopupSaveBtn onClick={onClick}>
          <div style={{ marginTop: "4px" }}>저장하기</div>
        </PopupSaveBtn>
      </PopupBox>
    </PopupDiv>
  );
});

export default ProjectPopup;
