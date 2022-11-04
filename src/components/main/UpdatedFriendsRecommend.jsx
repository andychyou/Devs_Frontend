import React from 'react';
import { UpdatedFriendsBox, UpdatedFriendsRecommendCardContainer, UpdatedFriendsSection} from '../../styledComponents';
import UpdatedFriendsBar from './UpdatedFriendsBar';
import { Button } from 'react-bootstrap';
import UpdatedFriendsCard from './UpdatedFriendsCard';
import UpdatedFriendsRecommendToYou from './UpdatedFriendsRecommendToYou';
import UpdatedFriendsRecommendCard from './UpdatedFriendsRecommendCard';


const UpdatedFriendsRecommend = () => {
  return (
    <>
        <section>
            <UpdatedFriendsRecommendToYou></UpdatedFriendsRecommendToYou>
            <UpdatedFriendsRecommendCardContainer>
              <UpdatedFriendsRecommendCard></UpdatedFriendsRecommendCard>
              <UpdatedFriendsRecommendCard></UpdatedFriendsRecommendCard>
              <UpdatedFriendsRecommendCard></UpdatedFriendsRecommendCard>
              <UpdatedFriendsRecommendCard></UpdatedFriendsRecommendCard>
              <UpdatedFriendsRecommendCard></UpdatedFriendsRecommendCard>
              <UpdatedFriendsRecommendCard></UpdatedFriendsRecommendCard>
            </UpdatedFriendsRecommendCardContainer>
        </section>
    </>
  );
};

export default React.memo(UpdatedFriendsRecommend);