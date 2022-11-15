import React from 'react';
import { UpdatedFriendsBox, UpdatedFriendsSection} from '../../styledComponents';
import UpdatedFriendsBar from './UpdatedFriendsBar';




const UpdatedFriendsStat = () => {
  return (
    <>
        <UpdatedFriendsSection>
            <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:'1000px'}}>
                
                <p style={{fontSize:'18px', fontWeight:'bold'}}>
                    업데이트한 친구들
                </p>
  
                <UpdatedFriendsBox >             
                    <UpdatedFriendsBar ></UpdatedFriendsBar>
                </UpdatedFriendsBox>
            </div>
            </div>
        </UpdatedFriendsSection>

       
    </>
  );
};

export default React.memo(UpdatedFriendsStat);