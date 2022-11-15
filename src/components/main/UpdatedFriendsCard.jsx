import React from 'react';
import { UpdatedFriendsBox, UpdatedFriendsCardDiv, UpdatedFriendsCardIcons, UpdatedFriendsCardImg, UpdatedFriendsCardName, UpdatedFriendsCardText, UpdatedFriendsRecommendChip} from '../../styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
const UpdatedFriendsCard = ({profile, type}) => {
  return (
    <>
        <section style={{display:'flex', justifyContent:'center', marginBottom: '20px'}}>
          <UpdatedFriendsCardDiv>
            <div style={{ display: 'flex', alignItems: "center" }} >
              <UpdatedFriendsCardImg            
                src={require("../../static/profile-img.png")}
              ></UpdatedFriendsCardImg>
              <UpdatedFriendsCardName>{profile}</UpdatedFriendsCardName>
              <UpdatedFriendsCardText>
                <span>{profile}님이</span>
                <span style={{fontWeight:'bold'}}>
                  {type}
                </span>
                <span>을 업데이트 했습니다</span>
              </UpdatedFriendsCardText>
              
              <div style={{display:'flex', justifyContent:'center', flex:'4'}}>
                <UpdatedFriendsRecommendChip>
                  #웹
                </UpdatedFriendsRecommendChip>
                <UpdatedFriendsRecommendChip>
                  #백엔드
                </UpdatedFriendsRecommendChip>
                
                
              </div>
            
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