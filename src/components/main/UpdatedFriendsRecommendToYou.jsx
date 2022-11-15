import React from 'react';
import { getCookie } from '../../config/cookie';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { APIURL } from '../../config/key';
import axios from 'axios';
import { UpdatedFriendsRecommendToYouDiv, UpdatedFriendsRecommendChips, UpdatedFriendsRecommendChip} from '../../styledComponents';



const UpdatedFriendsRecommendToYou = () => {
  const id = getCookie('user_id')
  const [myHashtagList, setMyHashtagList] = useState([]);
  const [g, setg] = useState(0);
  const getMyHashtagList = async () => {
    const res = await axios.get(
      `${APIURL}/profile/hashtag/get_hashtag/${getCookie("user_id")}}/`
    );
  
    if (res.status == 200) {
      const temp = [];
  
      for (let i = 0; i < res.data.length; i++) {
        temp.push(res.data[i].hashtag_name);
      }
  
      setMyHashtagList(temp);
      setg(1)
      console.log("get hashtag success");
    } else {
      console.log("get hashtag fail");
    }
  };

  useEffect(()=>{
    getMyHashtagList()
  }, [g])

  return (
    <>
        <UpdatedFriendsRecommendToYouDiv> 
            <div style={{fontSize:'20px'}}>
                <span id='user-name'>
                    {id}
                </span>
                <span>
                    님과 비슷한 개발자
                </span>
            </div>
            <UpdatedFriendsRecommendChips>
            {myHashtagList.map((elem) => (
                  <UpdatedFriendsRecommendChip>
                    {elem}
                  </UpdatedFriendsRecommendChip>
                ))}
                
                
            </UpdatedFriendsRecommendChips>
        </UpdatedFriendsRecommendToYouDiv>
    </>
  );
};

export default React.memo(UpdatedFriendsRecommendToYou);