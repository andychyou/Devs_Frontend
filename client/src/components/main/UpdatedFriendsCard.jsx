import React from 'react';
import { UpdatedFriendsBox, UpdatedFriendsCardDiv, UpdatedFriendsCardIcons, UpdatedFriendsCardImg, UpdatedFriendsCardName, UpdatedFriendsCardText} from '../../styledComponents';
import UpdatedFriendsBar from './UpdatedFriendsBar';
import { Button } from 'react-bootstrap';


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
              <div className="updated-card-chips flex-box-r">
                <Button className="updated-card-chip" variant="secondary">
                  #웹
                </Button>
                <Button className="updated-card-chip" variant="secondary">
                  #백엔드
                </Button>
              </div>
            </div>
          </UpdatedFriendsCardDiv>
        
        </section>
    </>
  );
};

export default React.memo(UpdatedFriendsCard);