import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { getCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";
import {
  CareerBox,
  CareerDiv,
  DescContentsDiv,
  DescDiv,
  Career,
  CareerDescDiv,
  CareerText,
  CareerDesc,
} from "../../styledComponents";
import DescHead from "./DescHead";
import CareerPopup from "./popup/CareerPopup";
import CareerComp from "./CareerComp";
import { useParams } from "react-router-dom";

const Careers = memo(() => {
  const id = getCookie("user_id");
  const [isAdd, setIsAdd] = useState(false);
  const params = useParams();

  // profile, company, position, locate,
  // start_date, end_date, skill, detail
  const [career, setCareer] = useState([]);

  useEffect(() => {
    axios.get(`${APIURL}/profile/career/${params.user_id}/`).then((res) => {
      setCareer(res.data);
    });
  }, [params.user_id]);

  return (
    <>
      {isAdd && <CareerPopup setPopup={setIsAdd} />}

      <DescDiv>
        <DescHead text="경력" setPopup={setIsAdd} />

        <DescContentsDiv>
          {career.length === 0 ? (
            <div>아직 경력이 없어요!</div>
          ) : (
            <>
              {career.map((data) => (
                <CareerComp key={data.id} career={data} />
              ))}
            </>
          )}
        </DescContentsDiv>
      </DescDiv>
    </>
  );
});

export default Careers;
