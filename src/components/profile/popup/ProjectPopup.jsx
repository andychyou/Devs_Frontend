import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
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
  PostBtnDiv,
  PostBtn,
} from "../../../styledComponents";

import PopupHeader from "./PopupHeader";
import PopupInputComp from "./PopupInputComp";

const ProjectPopup = memo(({ setPopup, text, isCreate, data }) => {
  const { isAdmin } = useOutletContext();
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
  const [yearErr, setYearErr] = useState(true);
  const [monErr, setMonErr] = useState(true);

  useEffect(() => {
    const regex = /\d{2}/;
    // console.log(regex.test("02"));

    if (regex.test(start_mon) && regex.test(end_mon)) {
      setMonErr(false);
    } else {
      setMonErr(true);
    }
  }, [start_mon, end_mon]);

  useEffect(() => {
    const regex = /\d{4}/;

    if (regex.test(start_year) && regex.test(end_year)) {
      setYearErr(false);
    } else {
      setYearErr(true);
    }
  }, [start_year, end_year]);

  useEffect(() => {
    if (data) {
      const [s_y, s_m] = data.start_date.split("-");
      const [e_y, e_m] = data.end_date.split("-");

      setInputs({
        name: data.project_name,
        position: data.position,
        skill: data.skill,
        coworker: data.coworker,
        start_year: s_y,
        start_mon: s_m,
        end_year: e_y,
        end_mon: e_m,
        detail: data.detail,
      });
    }
  }, []);

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

    if (yearErr || monErr) {
      alert("날짜 표기에 맞게 작성해주세요!");
      return;
    }

    postProject().then(() => {
      setPopup(false);
      window.location.reload();
    });
  };

  const onPatch = async () => {
    // profile, project_name, position, skill,
    // coworker, start_date, end_date, detail
    const res = await axios.patch(
      `${APIURL}/profile/project/${data.id}/`,
      {
        project_name: name,
        detail,
        coworker,
        skill,
        position,
        profile: getCookie("user_id"),
        start_date: start_year + start_mon + "-01",
        end_date: end_year + end_mon + "-01",
      },
      {
        headers: {
          Authorization: "token " + getCookie("token"),
        },
      }
    );

    if (res.status == 200) {
      alert("프로젝트 정보가 수정되었습니다.");
      setPopup(false);
      window.location.relaod();
    }
  };

  const sendPatch = () => {
    console.log(yearErr, monErr);
    if (yearErr || monErr) {
      alert("날짜 표기에 맞게 작성해주세요!");
      return;
    }

    onPatch();
  };

  const onDelete = async () => {
    const res = await axios.delete(`${APIURL}/profile/project/${data.id}/`, {
      headers: {
        Authorization: "token " + getCookie("token"),
      },
    });

    if (res.status == 204) {
      alert("프로젝트 정보가 삭제되었습니다.");
      setPopup(false);
      window.location.reload();
    }
  };
  return (
    <PopupDiv>
      <PopupBox type="career">
        <PopupHeader setPopup={setPopup} text={text} />

        <PopupInputComp
          onChange={onChange}
          name="name"
          value={name}
          text="프로젝트명"
          disable={isAdmin ? false : true}
        />
        <PopupInputComp
          onChange={onChange}
          name="position"
          value={position}
          text="담당"
          disable={isAdmin ? false : true}
        />
        <PopupInputComp
          onChange={onChange}
          name="skill"
          value={skill}
          text="사용한 기술 스택"
          disable={isAdmin ? false : true}
        />

        <PopupDateDiv>
          <PopupDateSmall>
            <PopupDateText>프로젝트 시작 일자</PopupDateText>
            <PopupDateInputDiv>
              <PopupDateInput
                onChange={onChange}
                name="start_year"
                value={start_year}
                placeholder="YEAR(ex 2022)"
                disabled={isAdmin ? false : true}
              />
              <PopupDateInput
                onChange={onChange}
                name="start_mon"
                value={start_mon}
                placeholder="MONTH(ex 01)"
                disabled={isAdmin ? false : true}
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
                placeholder="YEAR(ex 2022)"
                disabled={isAdmin ? false : true}
              />
              <PopupDateInput
                onChange={onChange}
                name="end_mon"
                value={end_mon}
                placeholder="MONTH(ex 01)"
                disabled={isAdmin ? false : true}
              />
            </PopupDateInputDiv>
          </PopupDateSmall>
        </PopupDateDiv>

        <PopupInputComp
          name="coworker"
          value={coworker}
          onChange={onChange}
          text="함께 한 동료"
          disable={isAdmin ? false : true}
        />

        <PopupInputDiv style={{ flexGrow: "3" }}>
          <PopupInputText>상세설명</PopupInputText>
          <PopupTextarea
            name="detail"
            value={detail}
            onChange={onChange}
            disabled={isAdmin ? false : true}
          />
        </PopupInputDiv>

        {isCreate ? (
          <PopupSaveBtn onClick={onClick}>
            <div style={{ marginTop: "4px" }}>저장하기</div>
          </PopupSaveBtn>
        ) : (
          isAdmin && (
            <PostBtnDiv size="big">
              <PostBtn size="big" onClick={sendPatch}>
                수정
              </PostBtn>
              <PostBtn size="big" type="delete" onClick={onDelete}>
                삭제
              </PostBtn>
            </PostBtnDiv>
          )
        )}
      </PopupBox>
    </PopupDiv>
  );
});

export default ProjectPopup;
