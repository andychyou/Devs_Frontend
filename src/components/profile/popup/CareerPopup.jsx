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

const CareerPopup = memo(({ setPopup }) => {
  const [inputs, setInputs] = useState({
    company: "",
    position: "",
    locate: "",
    start_year: "",
    start_month: "",
    end_year: "",
    end_month: "",
    skill: "",
    detail: "",
  });
  const {
    company,
    position,
    locate,
    start_year,
    start_month,
    end_year,
    end_month,
    skill,
    detail,
  } = inputs;

  const sendRequest = async () => {
    const body = {
      profile: getCookie("user_id"),
      company,
      position,
      locate,
      start_date: start_year + "-" + start_month + "-01",
      end_date: end_year + "-" + end_month + "-01",
      skill,
      detail,
    };
    console.log(body);
    const res = await axios.post(`${APIURL}/profile/career/`, body, {
      headers: {
        Authorization: "token " + getCookie("token"),
      },
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClick = () => {
    if (
      !company ||
      !position ||
      !locate ||
      !start_month ||
      !start_year ||
      !end_month ||
      !end_year ||
      !skill ||
      !detail
    ) {
      alert("모든 정보를 입력해주세요!");
      return;
    }

    sendRequest().then(() => {
      setPopup(false);
      window.location.reload();
    });
  };

  return (
    <PopupDiv>
      <PopupBox type="career">
        <PopupHeader setPopup={setPopup} text="경력 추가하기" />

        <PopupInputComp
          name="company"
          value={company}
          onChange={onChange}
          text="회사명"
        />
        <PopupInputComp
          name="locate"
          value={locate}
          onChange={onChange}
          text="위치"
        />
        <PopupInputComp
          name="position"
          value={position}
          onChange={onChange}
          text="직책"
        />

        <PopupDateDiv>
          <PopupDateSmall>
            <PopupDateText>근무 시작 일자</PopupDateText>
            <PopupDateInputDiv>
              <PopupDateInput
                name="start_year"
                value={start_year}
                onChange={onChange}
                placeholder="YEAR(ex 2022)"
              />
              <PopupDateInput
                name="start_month"
                value={start_month}
                onChange={onChange}
                placeholder="MONTH(ex 01)"
              />
            </PopupDateInputDiv>
          </PopupDateSmall>
          <PopupDateSmall>
            <PopupDateText>근무 종료 일자</PopupDateText>
            <PopupDateInputDiv>
              <PopupDateInput
                name="end_year"
                value={end_year}
                onChange={onChange}
                placeholder="YEAR(ex 2022)"
              />
              <PopupDateInput
                name="end_month"
                value={end_month}
                onChange={onChange}
                placeholder="MONTH(ex 01)"
              />
            </PopupDateInputDiv>
          </PopupDateSmall>
        </PopupDateDiv>

        <PopupInputComp
          name="skill"
          text="사용한 기술 스택"
          value={skill}
          onChange={onChange}
        />

        <PopupInputDiv style={{ flexGrow: "3" }}>
          <PopupInputText>업무 내용</PopupInputText>
          <PopupTextarea name="detail" value={detail} onChange={onChange} />
        </PopupInputDiv>

        <PopupSaveBtn onClick={onClick}>
          <div style={{ marginTop: "4px" }}>저장하기</div>
        </PopupSaveBtn>
      </PopupBox>
    </PopupDiv>
  );
});

export default CareerPopup;
