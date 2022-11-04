import React from 'react';
import { UpdatedFriendsRecommendCardDiv, UpdatedFriendsRecommendCardImg, UpdatedFriendsRecommendCardName, UpdatedFriendsRecommendCardIdolButton} from '../../styledComponents';


const UpdatedFriendsRecommendCard = () => {
  return (
    <>
        <UpdatedFriendsRecommendCardDiv>
            <UpdatedFriendsRecommendCardImg src={require('../../static/profile-img.png')}></UpdatedFriendsRecommendCardImg>
            <UpdatedFriendsRecommendCardName>찬수</UpdatedFriendsRecommendCardName>
            <UpdatedFriendsRecommendCardIdolButton>idol 등록</UpdatedFriendsRecommendCardIdolButton>
        </UpdatedFriendsRecommendCardDiv>
    </>
  );
};

export default React.memo(UpdatedFriendsRecommendCard);