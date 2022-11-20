import React from 'react';
import { UpdatedFriendsBox, UpdatedFriendsSection} from '../../styledComponents';
import UpdatedFriendsBar from './UpdatedFriendsBar';




const UpdatedFriendsStat = () => {
  return (
    <>
        <UpdatedFriendsSection>
            <div style={{width:'60%', margin:'0 auto'}}>
                
                <p style={{fontSize:'18px', fontWeight:'bold'}}>
                    업데이트한 친구들
                </p>
  
                <UpdatedFriendsBox >             
                    <UpdatedFriendsBar ></UpdatedFriendsBar>
                </UpdatedFriendsBox>
            </div>
        </UpdatedFriendsSection>

       
    </>
  );
};

export default React.memo(UpdatedFriendsStat);