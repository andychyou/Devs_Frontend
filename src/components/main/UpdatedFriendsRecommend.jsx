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
      if(res.data.length > 5){
        for (let i = 0; i < 5; i++) {
          temp.push(res.data[i].hashtag_name);
        }
        const hey = await temp;
        setMyHashtagList(hey);
      }
      else{
        for (let i = 0; i < res.data.length; i++) {
          temp.push(res.data[i].hashtag_name);
        }
        const hey = await temp;
        setMyHashtagList(hey);
      }
    } else {
      console.log("get hashtag fail");
    }
  };


  

  const [profiles, setProfiles] = useState([]);
  const getProfilesList = async () => {
    clicked.current = true
    var li = []
    const res = await axios.get(
      `${APIURL}/mainfeed/recommend/${currHashtag}/`,
      { headers: { Authorization: "token " + getCookie("token") } }
    );

    if (res.status == 200) {
      if(res.data.length > 5){
        for(let i = 0 ;i<5;i++){
          const row = await res.data[i].user
          li.push(row)
        }
      }
      else{
        for(let i = 0 ;i<res.data.length;i++){
          const row = await res.data[i].user
          li.push(row)
        }
      }
      if(li.length === 0){
        li_empty.current = true
      }
      else{
        li_empty.current = false

      }
      setProfiles(li);
    } else {
      console.log("get hashtag fail");
    }
  };

  const [currHashtag, setCurrHashtag] = useState("");

  useEffect(() => {
    getMyHashtagList();
  }, []);
  useEffect(() => {
    if (myHashtagList.length != 0) {
      getProfilesList();
    }
  }, [currHashtag]);

  const clicked = useRef(false)
  const clicked_but_empty = useRef(false)
  const li_empty = useRef(false)

  var displayStyle 
  var showrecommendsent = 0
  if(profiles.length == 0){
    displayStyle = {display: 'none'}
    showrecommendsent = 1
  }
  else{
    displayStyle = {}
    showrecommendsent = 0
  }
  
  console.log('myhashtag', myHashtagList.length)
  console.log('li empty', li_empty.current)

  return (
    <>
      <section>
        <UpdatedFriendsRecommendToYouDiv>
          <div style={{ fontSize: "18px", fontWeight:"bold" }}>
            <span>친구추천</span>
            {myHashtagList.length == 0  && (
              <div
                style={{
                  fontSize: "16px",
                  fontWeight:'normal',
                  marginTop: "10px",
                }}
              >
                내 프로필에서 해시태그를 추가해 친구를 추천받아 보세요
              </div>
            )}
            { myHashtagList.length != 0  && li_empty.current === false && (
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  marginTop: "10px",
                }}
              >
                해시태그를 클릭해서 추천받아요
              </div>
            )}
            { myHashtagList.length != 0  && li_empty.current === true && (
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  marginTop: "10px",
                }}
              >
                해당 해시태그로 추천할 친구가 없어요
              </div>
            )}
          </div>
          <UpdatedFriendsRecommendChips>
            {myHashtagList.length != 0 &&
              myHashtagList.map((elem, idx) => (
                <UpdatedFriendsRecommendChip style={currHashtag === elem ? {fontWeight:'bold', borderColor:'#f25089'}: {fontWeight:'400'}}
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

        <UpdatedFriendsRecommendCardContainer style={displayStyle}>
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
