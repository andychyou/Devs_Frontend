import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";
import {
  BigBox,
  BigDiv,
  DescContentsDiv,
  DescDiv,
  DescSmallDiv,
  SmallBox,
  SmallDiv,
  SmallLabel,
  SmallInput,
  BigInput,
  SaveBtn,
} from "../../styledComponents";
import DescHead from "./DescHead";

const Details = memo(() => {
  const [isEdit, setIsEdit] = useState(false);
  const params = useParams();
  const id = params.user_id;
  const [isInit, setIsInit] = useState(false);

  const [details, setDetails] = useState({
    user: "", // user_id
    belong: "",
    introduction: "",
    major: "",
    main_position: "",
    sub_position: "",
  });
  const { belong, introduction, major, main_position, sub_position } = details;

  const bRef = useRef();
  const iRef = useRef();
  const mRef = useRef();
  const pRef = useRef();
  const sRef = useRef();

  useEffect(() => {
    axios
      .get(`${APIURL}/profile/profile/${id}/`)
      .then((res) => {
        console.log("get profile success");
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsInit(true);
      });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isEdit) {
      bRef.current.focus();
    }
  }, [isEdit]);

  const onDetailsPost = () => {
    axios
      .patch(`${APIURL}/profile/profile/${id}/`, {
        belong,
        major,
        main_position,
        sub_position,
        introduction,
      })
      .then((res) => {
        if (res.status == 200) {
          console.log("patch profile success");
        }
      })
      .catch((err) => console.log(err));

    // setIsEdit(false)

    // if(isInit){
    //   axios.post(`${APIURL}/profiles/details/`, {
    //     user: id,
    //     belongs, major, position, subposition,
    //     introduction
    //   })
    //   .then(res => {
    //     console.log('detail post success')
    //   })
    //   .catch(err => console.log(err))
    // } else {
    //   axios.patch(`${APIURL}/profile/${id}/`, {
    //     belong, major, main_position, sub_position,
    //     introduction
    //   })
    //   .then(res => {
    //     console.log('detail patch success');
    //   })
    //   .catch(err => console.log(err))
    // }

    window.location.reload();
  };

  return (
    <DescDiv>
      {isEdit && <SaveBtn onClick={onDetailsPost}>저장</SaveBtn>}
      <DescHead text="소개" setPopup={setIsEdit} />

      <DescContentsDiv>
        <DescSmallDiv>
          <SmallDiv>
            <SmallLabel>학교/직장</SmallLabel>
            {isEdit ? (
              <SmallInput
                type="text"
                name="belong"
                value={belong}
                onChange={onChange}
                ref={bRef}
                autoComplete="nope"
              />
            ) : (
              <SmallBox>{belong}</SmallBox>
            )}
          </SmallDiv>
          <SmallDiv>
            <SmallLabel>전공</SmallLabel>
            {isEdit ? (
              <SmallInput
                type="text"
                name="major"
                value={major}
                onChange={onChange}
                ref={mRef}
                autoComplete="nope"
              />
            ) : (
              <SmallBox>{major}</SmallBox>
            )}
          </SmallDiv>
        </DescSmallDiv>

        <DescSmallDiv>
          <SmallDiv>
            <SmallLabel>메인포지션</SmallLabel>
            {isEdit ? (
              <SmallInput
                type="text"
                name="main_position"
                value={main_position}
                onChange={onChange}
                ref={pRef}
                autoComplete="nope"
              />
            ) : (
              <SmallBox>{main_position}</SmallBox>
            )}
          </SmallDiv>
          <SmallDiv>
            <SmallLabel>서브포지션</SmallLabel>
            {isEdit ? (
              <SmallInput
                type="text"
                name="sub_position"
                value={sub_position}
                onChange={onChange}
                ref={sRef}
                autoComplete="nope"
              />
            ) : (
              <SmallBox>{sub_position}</SmallBox>
            )}
          </SmallDiv>
        </DescSmallDiv>

        <BigDiv>
          <SmallLabel>자기소개</SmallLabel>
          {isEdit ? (
            <BigInput
              name="introduction"
              value={introduction}
              onChange={onChange}
              ref={iRef}
              autoComplete="nope"
            ></BigInput>
          ) : (
            <BigBox>{introduction}</BigBox>
          )}
        </BigDiv>
      </DescContentsDiv>
    </DescDiv>
  );
});

export default Details;
