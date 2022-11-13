import axios from "axios";
import React, { memo, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { APIURL } from "../../../config/key";
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
const MyFanPopup = memo(({ setPopup }) => {
  const params = useParams();
  const id = params.user_id;
  const [fans, setFans] = useState([]);

  useEffect(() => {
    axios
      .get(`${APIURL}/profile/follow/${id}/get_follower/`)
      .then((res) => {
        console.log(res);
        setFans(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <PopupDiv>
        <PopupBox>
          <PopupHeader setPopup={setPopup} text="FAN" />

          {fans.length === 0 ? (
            <EmptyFanIdol>No Fan</EmptyFanIdol>
          ) : (
            <>
              {fans.map((data, idx) => (
                <CardUnit key={idx}>
                  <CardImgNameBox>
                    <CardImg
                      src={require("../../../static/profile-img.png")}
                    ></CardImg>
                    <CardUserName>도영</CardUserName>
                  </CardImgNameBox>
                  <CardUserDesc>{data}</CardUserDesc>
                </CardUnit>
              ))}
            </>
          )}
        </PopupBox>
      </PopupDiv>
    </>
  );
});

export default MyFanPopup;
