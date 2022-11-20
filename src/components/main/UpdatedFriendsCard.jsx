import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import axios from 'axios';
import { UpdatedFriendsBox, UpdatedFriendsCardDiv, UpdatedFriendsCardIcons, UpdatedFriendsCardImg, UpdatedFriendsCardName, UpdatedFriendsCardText, UpdatedFriendsRecommendChip} from '../../styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';






const UpdatedFriendsCard = ({profile, type}) => {
  const [hashtag, setHashtag] = useState([]); 
  const [userInfo, setUserInfo] = useState(null)
  const getHashtag = async () => {
    const res = await axios.get(
      `${APIURL}/profile/hashtag/get_hashtag/${profile}}/`
    );
  
    if (res.status == 200) {
      const temp = [];
  
      for (let i = 0; i < res.data.length; i++) {
        temp.push(res.data[i].hashtag_name);
      }
  
      setHashtag(temp);
    } else {
      console.log("get hashtag fail");
    }
  };
  const getUserInfo = async () => {
    const res = await axios.get(`${APIURL}/account/user/${profile}`);

    if (res.status == 200) {
      setUserInfo(res.data);
    } else {
      console.log("get user info fail");
    }
  };
  
  useEffect(() => { 
    getHashtag() 
  }, [])
  useEffect(() => {
  if(hashtag){ getUserInfo() } 
  }, [])
  const [sentence, setSentence] = useState("")
  const [suffix, setSuffix] = useState("을")
  useEffect(()=>{
    if(type === "profile"){
      setSentence("프로필")
    }
    else if(type === "study"){
      setSentence("스터디")
      setSuffix("를")
    }
    else if(type === "skill"){
      setSentence("스킬")
    }
    else if(type === "project"){
      setSentence("프로젝트")
      setSuffix("를")
    }
    else if(type === "career"){
      setSentence("커리어")
      setSuffix("를")
    }
  },[])
  
  return (
    <>
        <section style={{display:'flex', justifyContent:'center', marginBottom: '20px'}}>
          <UpdatedFriendsCardDiv>
            <div style={{ display: 'flex', alignItems: "center" }} >
              {
                (userInfo != null) && <UpdatedFriendsCardImg            
                src={userInfo.image}
              ></UpdatedFriendsCardImg>
              }
              
              <UpdatedFriendsCardName>{profile}</UpdatedFriendsCardName>
              <UpdatedFriendsCardText>
                <span>{profile} </span>
                <span style={{fontWeight:'bold'}}>
                  {sentence}
                </span>
                <span>{suffix} 업데이트 했습니다</span>
              </UpdatedFriendsCardText>
              
              {/* hashtage 예시 */}
              {/* <div style={{display:'flex', justifyContent:'center', flex:'4'}}>
                <UpdatedFriendsRecommendChip>
                  #웹
                </UpdatedFriendsRecommendChip>
                <UpdatedFriendsRecommendChip>
                  #백엔드
                </UpdatedFriendsRecommendChip>
              </div> */}
              <div style={{display:'flex', justifyContent:'center', flex:'4'}}>
                {hashtag.map((elem) => (
                  <UpdatedFriendsRecommendChip>
                    {elem}
                  </UpdatedFriendsRecommendChip>
                ))}
              </div>
            
                  {/* 하트, 채팅 아이콘 */}
              {/* <UpdatedFriendsCardIcons>
                <FontAwesomeIcon style={{color: 'red'}} size="3x" icon={faHeart} />
                <FontAwesomeIcon style={{color: 'black'}} size="3x" icon={faMessage} />
              </UpdatedFriendsCardIcons> */}
            </div>
            
          </UpdatedFriendsCardDiv>
        
        </section>
    </>
  );
};

export default React.memo(UpdatedFriendsCard);