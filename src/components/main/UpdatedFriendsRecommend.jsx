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
    var li 
    const res = await axios.get(
      `${APIURL}/profile/hashtag/get_user/${currHashtag}/`,
      { headers: { Authorization: "token " + getCookie("token") } }
    );

    if (res.status == 200) {
      li = res.data[0].profile
      let len = li.length
      for(let i = 0; i < len; i++){//사용자는 리스트에서 제외
        if(li[i] === getCookie("user_id")){
          li.splice(i, 1)
        }
      }
      var p_list = []
      console.log('afddsa', li)
      if(li.length > 5){
        for(let i = 0 ;i<5;i++){
          const row = await li[i]
          p_list.push(row)
        }
      }
      else{
        for(let i = 0 ;i<li.length;i++){
          const row = await li[i]
          p_list.push(row)
        }
      }
      
      setProfiles(p_list);
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

  var displayStyle 
  var showrecommendsent = 0
  if(profiles.length == 0){
    displayStyle = {display: 'none'}
    console.log(displayStyle)
    showrecommendsent = 1
  }
  else{
    displayStyle = {}
    showrecommendsent = 0
  }

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
            {showrecommendsent === 1 && (
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
