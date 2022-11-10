import React from 'react';
import { UpdatedFriendsRecommendToYouDiv, UpdatedFriendsRecommendChips, UpdatedFriendsRecommendChip} from '../../styledComponents';



const UpdatedFriendsRecommendToYou = () => {
  return (
    <>
        <UpdatedFriendsRecommendToYouDiv> 
            <div style={{fontSize:'20px'}}>
                <span id='user-name'>
                    아영
                </span>
                <span>
                    님과 비슷한 개발자
                </span>
            </div>
            <UpdatedFriendsRecommendChips>
                <UpdatedFriendsRecommendChip>
                #웹
                </UpdatedFriendsRecommendChip>
                <UpdatedFriendsRecommendChip>
                #백엔드
                </UpdatedFriendsRecommendChip>
                <UpdatedFriendsRecommendChip>
                #웹
                </UpdatedFriendsRecommendChip>
                <UpdatedFriendsRecommendChip>
                #백엔드
                </UpdatedFriendsRecommendChip>
            </UpdatedFriendsRecommendChips>
        </UpdatedFriendsRecommendToYouDiv>
    </>
  );
};

export default React.memo(UpdatedFriendsRecommendToYou);