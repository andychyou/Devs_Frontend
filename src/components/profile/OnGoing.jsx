import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";
import {
  DescDiv,
  DescContentsDiv,
  CurrentStudy,
  SaveBtn,
  CurrentInput,
} from "../../styledComponents";
import DescHead from "./DescHead";

const OnGoing = memo(() => {
  // const id = getCookie('user_id')
  const params = useParams();
  const id = params.user_id;
  const [isEdit, setIsEdit] = useState(false);
  const [onGoing, setOnGoing] = useState("");
  const onRef = useRef();

  useEffect(() => {
    axios
      .get(`${APIURL}/profile/study/${id}/`)
      .then((res) => {
        console.log("ongoing: ", res.data);
        setOnGoing(res.data.current_study);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    if (isEdit) {
      onRef.current.focus();
    }
  }, [isEdit]);

  const ongoingPost = async () => {
    const res = await axios.patch(`${APIURL}/profile/study/${id}/`, {
      current_study: onGoing,
    });

    if (res.status == 200) {
      console.log("ongoing patch success");
      window.location.reload();
    } else {
      console.log("ongoing patch fail");
    }
  };

  return (
    <DescDiv>
      {isEdit && <SaveBtn onClick={ongoingPost}>저장</SaveBtn>}

      <DescHead text="현재 진행 중" setPopup={setIsEdit} />

      <DescContentsDiv>
        {isEdit ? (
          <CurrentInput
            value={onGoing}
            ref={onRef}
            onChange={(e) => {
              setOnGoing(e.target.value);
            }}
          />
        ) : (
          <CurrentStudy>{onGoing}</CurrentStudy>
        )}
      </DescContentsDiv>
    </DescDiv>
  );
});

export default OnGoing;
