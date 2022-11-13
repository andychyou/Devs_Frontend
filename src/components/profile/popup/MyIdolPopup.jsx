import React, { memo, useState, useEffect } from "react";
import {
  PopupBox,
  PopupDiv,
  CardUnit,
  CardUserName,
  CardUserDesc,
  CardImg,
  CardImgNameBox,
  EmptyFanIdol,
} from "../../../styledComponents";
import PopupHeader from "./PopupHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../../../config/key";

const MyIdolPopup = memo(({ setPopup }) => {
  const params = useParams();
  const id = params.user_id;
  const [idols, setIdols] = useState([]);

  useEffect(() => {
    axios
      .get(`${APIURL}/profile/follow/${id}/get_following/`)
      .then((res) => {
        console.log(res);
        setIdols(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <PopupDiv>
        <PopupBox>
          <PopupHeader setPopup={setPopup} text="IDOL" />
          <CardUnit>
            <CardImgNameBox>
              <CardImg
                src={require("../../../static/profile-img.png")}
              ></CardImg>
              <CardUserName>도영</CardUserName>
            </CardImgNameBox>
            <CardUserDesc>Front-End Developer</CardUserDesc>
          </CardUnit>

          {/* {idols.length === 0 ? (
            <EmptyFanIdol>No Idol</EmptyFanIdol>
          ) : (
            <>
              {idols.map((data, idx) => (
                <CardUnit key={idx}>
                  <CardImgNameBox>
                    <CardImg
                      src={require("../../../static/profile-img.png")}
                    ></CardImg>
                    <CardUserName>도영</CardUserName>
                  </CardImgNameBox>
                  <CardUserDesc>Front-End Developer</CardUserDesc>
                </CardUnit>
              ))}
            </>
          )} */}
        </PopupBox>
      </PopupDiv>
    </>
  );
});

export default MyIdolPopup;
