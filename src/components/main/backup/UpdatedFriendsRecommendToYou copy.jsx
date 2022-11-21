import React from 'react';
import { getCookie } from '../../config/cookie';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { APIURL } from '../../config/key';
import axios from 'axios';
import { UpdatedFriendsRecommendToYouDiv, UpdatedFriendsRecommendChips, UpdatedFriendsRecommendChip} from '../../styledComponents';



const UpdatedFriendsRecommendToYou = ({hashtag_list}) => {
  const id = getCookie('user_id')


  
 
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
            
              
            {hashtag_list.length == 0 && <p style={{fontSize:'16px', fontWeight:'bold'}}>내 프로필에서 해시태그를 추가해 친구를 추천받아 보세요</p>}
                
            </div>
            <UpdatedFriendsRecommendChips>
            {hashtag_list.length != 0 && hashtag_list.map((elem,idx) => (
                  <UpdatedFriendsRecommendChip key={idx}>
                    #{elem}
                  </UpdatedFriendsRecommendChip>
                ))}
                
                
            </UpdatedFriendsRecommendChips>
        </UpdatedFriendsRecommendToYouDiv>
    </>
  );
};

export default React.memo(UpdatedFriendsRecommendToYou);