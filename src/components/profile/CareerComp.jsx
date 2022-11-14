import axios from "axios";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";
import {
  CareerBox,
  CareerDesc,
  CareerDescDiv,
  CareerDiv,
  CareerText,
  Career,
  CareerHoverDiv,
  CareerHoverBox,
  CareerInput,
  CareerDescInput,
} from "../../styledComponents";

const CareerComp = ({ career }) => {
  const { isAdmin } = useOutletContext();
  const [hover, setHover] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [inputs, setInputs] = useState({
    company: career.company,
    locate: career.locate,
    position: career.position,
    start_date: career.start_date,
    end_date: career.end_date,
    detail: career.detail,
    skill: career.skill,
  });
  const { company, position, locate, start_date, end_date, detail, skill } =
    inputs;

  const deleteCareer = async () => {
    const res = await axios.delete(`${APIURL}/profile/career/${career.id}/`, {
      headers: {
        Authorization: "token " + getCookie("token"),
      },
    });

    if (res.status == 204) {
      window.location.reload();
    } else {
      console.log("delete career fail");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const patchCareer = async () => {
    const body = {
      profile: getCookie("user_id"),
      company,
      position,
      locate,
      start_date,
      end_date,
      skill,
      detail,
    };
    const res = await axios.patch(
      `${APIURL}/profile/career/${career.id}/`,
      body,
      {
        headers: {
          Authorization: "token " + getCookie("token"),
        },
      }
    );

    if (res.status == 200) {
      setIsEdit(false);
      window.location.reload();
    } else {
      console.log("patch career fail");
    }
  };

  return (
    <>
      {!isEdit ? (
        <CareerDiv
          onMouseEnter={() => {
            if (isAdmin) {
              setHover(true);
            }
          }}
          onMouseLeave={() => setHover(false)}
        >
          {hover && (
            <CareerHoverDiv>
              <CareerHoverBox type="edit" onClick={() => setIsEdit(true)}>
                수정
              </CareerHoverBox>
              <CareerHoverBox type="delete" onClick={deleteCareer}>
                삭제
              </CareerHoverBox>
            </CareerHoverDiv>
          )}

          <CareerBox style={{ marginBottom: "3px" }}>
            <Career type="text">회사/위치</Career>
            <Career type="text">직책</Career>
            <Career type="text">근무 날짜</Career>
          </CareerBox>
          <CareerBox>
            <Career>
              {career.company} / {career.locate}
            </Career>
            <Career>{career.position}</Career>
            <Career>
              {career.start_date} - {career.end_date}
            </Career>
          </CareerBox>

          <CareerDescDiv>
            <CareerText>사용 기술</CareerText>
            <CareerDesc>{career.skill}</CareerDesc>
          </CareerDescDiv>

          <CareerDescDiv>
            <CareerText>업무 내용</CareerText>
            <CareerDesc>{career.detail}</CareerDesc>
          </CareerDescDiv>
        </CareerDiv>
      ) : (
        <CareerDiv>
          <CareerHoverDiv>
            <CareerHoverBox type="save" onClick={patchCareer}>
              저장
            </CareerHoverBox>
          </CareerHoverDiv>
          <CareerBox style={{ marginBottom: "3px" }}>
            <Career type="text">회사/위치</Career>
            <Career type="text">직책</Career>
            <Career type="text">근무 날짜</Career>
          </CareerBox>

          <CareerBox>
            <CareerInput
              name="company"
              value={company}
              onChange={onChange}
              type="small"
            />
            <CareerInput
              name="locate"
              value={locate}
              onChange={onChange}
              type="small"
            />
            <CareerInput name="position" value={position} onChange={onChange} />
            <CareerInput
              placeholder="YYYY-MM-DD"
              name="start_date"
              value={start_date}
              onChange={onChange}
              type="small"
            />
            <CareerInput
              placeholder="YYYY-MM-DD"
              name="end_date"
              value={end_date}
              onChange={onChange}
              type="small"
            />
          </CareerBox>

          <CareerDescDiv>
            <CareerText>사용 기술</CareerText>
            <CareerDescInput name="skill" value={skill} onChange={onChange} />
          </CareerDescDiv>

          <CareerDescDiv>
            <CareerText>업무 내용</CareerText>
            <CareerDescInput name="detail" value={detail} onChange={onChange} />
          </CareerDescDiv>
        </CareerDiv>
      )}
    </>
  );
};

export default CareerComp;
