import React from 'react';
import { UpdatedFriendsBox, UpdatedFriendsCardDiv, UpdatedFriendsCardIcons, UpdatedFriendsCardImg, UpdatedFriendsCardName, UpdatedFriendsCardText, UpdatedFriendsRecommendChip} from '../../styledComponents';


const UpdatedFriendsCard = () => {
  return (
    <>
        <section style={{display:'flex', justifyContent:'center', marginBottom: '20px'}}>
          <UpdatedFriendsCardDiv>
            <div style={{ display: 'flex', alignItems: "center" }} >
              <UpdatedFriendsCardImg            
                src={require("../../static/profile-img.png")}
              ></UpdatedFriendsCardImg>
              <UpdatedFriendsCardName>세은</UpdatedFriendsCardName>
              <UpdatedFriendsCardText>
                <span>세은님이</span>
                <span style={{fontWeight:'bold'}}>
                  사이드 프로젝트/개발스타그램
                </span>
                <span>을 업데이트 했습니다</span>
              </UpdatedFriendsCardText>
              <UpdatedFriendsCardIcons>
                <span class="material-symbols-outlined">favorite</span>
                <span class="material-symbols-outlined">chat</span>
              </UpdatedFriendsCardIcons>
            </div>
            <div>
              <div style={{display:'flex', justifyContent:'center'}}>
                <UpdatedFriendsRecommendChip>
                  #웹
                </UpdatedFriendsRecommendChip>
                <UpdatedFriendsRecommendChip>
                  #백엔드
                </UpdatedFriendsRecommendChip>
              </div>
            </div>
          </UpdatedFriendsCardDiv>
        
        </section>
    </>
  );
};

export default React.memo(UpdatedFriendsCard);