import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";
import axios from "axios";
import {
  UpdatedFriendsBox,
  UpdatedFriendsRecommendCardContainer,
  UpdatedFriendsRecommendToYouDiv,
  UpdatedFriendsRecommendChip,
  UpdatedFriendsRecommendChips,
} from "../../styledComponents";
import UpdatedFriendsRecommendToYou from "./UpdatedFriendsRecommendToYou";
import UpdatedFriendsRecommendCard from "./UpdatedFriendsRecommendCard";

const UpdatedFriendsRecommend = () => {
  const [myHashtagList, setMyHashtagList] = useState([]);
  // const myHashtagList= useRef([]);
  const getMyHashtagList = async () => {
    const res = await axios.get(
      `${APIURL}/profile/hashtag/get_hashtag/${getCookie("user_id")}/`
    );

    if (res.status == 200) {
      const temp = [];
      for (let i = 0; i < res.data.length; i++) {
        temp.push(res.data[i].hashtag_name);
      }
      const hey = await temp;
      setMyHashtagList(hey);
      // myHashtagList.current = temp
    } else {
      console.log("get hashtag fail");
    }
  };

  const [g, setg] = useState(0);

  useEffect(() => {
    getMyHashtagList();
  }, []);

  const [profiles, setProfiles] = useState([]);
  const getProfilesList = async () => {
    const res = await axios.get(
      `${APIURL}/profile/hashtag/get_user/${currHashtag}/`,
      { headers: { Authorization: "token " + getCookie("token") } }
    );
    if (res.status == 200) {
      console.log("profiles", res.data[0].profile);
      const row = await res.data[0].profile;
      setProfiles(row);
    } else {
      console.log("get hashtag fail");
    }
  };

  const [currHashtag, setCurrHashtag] = useState("");

  useEffect(() => {
    if (myHashtagList.length != 0) {
      getProfilesList();
    }
  }, [currHashtag]);

  console.log(myHashtagList);
  console.log("profiles", profiles);
  console.log("curr hashtag", currHashtag);
  return (
    <>
      <section>
        <UpdatedFriendsRecommendToYouDiv>
          <div style={{ fontSize: "20px" }}>
            <span id="user-name">{getCookie("user_id")}</span>
            <span>님과 비슷한 개발자</span>
            {myHashtagList.length == 0 && (
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                내 프로필에서 해시태그를 추가해 친구를 추천받아 보세요
              </div>
            )}
            {currHashtag === "" && (
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                해시태그를 클릭해서 추천받아요
              </div>
            )}
          </div>
          <UpdatedFriendsRecommendChips>
            {myHashtagList.length != 0 &&
              myHashtagList.map((elem, idx) => (
                <UpdatedFriendsRecommendChip
                  onClick={() => {
                    setCurrHashtag(elem);
                  }}
                  key={idx}
                >
                  #{elem}
                </UpdatedFriendsRecommendChip>
              ))}
          </UpdatedFriendsRecommendChips>
        </UpdatedFriendsRecommendToYouDiv>

        <UpdatedFriendsRecommendCardContainer>
          {profiles.length != 0 &&
            profiles.map((user, idx) => (
              <UpdatedFriendsRecommendCard
                user={user}
                key={idx}
              ></UpdatedFriendsRecommendCard>
            ))}
        </UpdatedFriendsRecommendCardContainer>
      </section>
    </>
  );
};

export default React.memo(UpdatedFriendsRecommend);
