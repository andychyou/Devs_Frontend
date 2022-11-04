import React from 'react';
import { UpdatedFriendsDot, UpdatedFriendsImg } from '../../styledComponents';



const UpdatedFriendsBar = () => {
  return (
    <>
        <section>
                {/* 최대 8개 까지 보이도록 js 짜기 */}
                <div style={{gap:'10px', alignItems:'center' ,justifyContent:'center', display:'flex'}}>
                    <div style={{cursor: 'pointer'}}>
                        <UpdatedFriendsImg src={require('../../static/profile-img.png')}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div>
                    <div style={{cursor: 'pointer'}}>
                        <UpdatedFriendsImg src={require('../../static/profile-img.png')}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div>
                    <div style={{cursor: 'pointer'}}>
                        <UpdatedFriendsImg src={require('../../static/profile-img.png')}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div>
                </div> 
           
         
        </section>

       
    </>
  );
};

export default React.memo(UpdatedFriendsBar);