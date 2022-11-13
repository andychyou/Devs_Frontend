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

const Careers = memo(() => {
  const id = getCookie("user_id");
  const [isAdd, setIsAdd] = useState(false);

  // profile, company, position, locate,
  // start_date, end_date, skill, detail
  const [career, setCareer] = useState([]);

  useEffect(() => {
    axios
      .get(`${APIURL}/profile/career/${id}/`)
      .then((res) => {
        console.log("career: ", res.data);
        setCareer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
