import React from 'react';
import { RecommendBarDiv, RecommendChip, RecommendToWho } from '../../styledComponents';

const RecommendBar = () => {
  return (
        <RecommendBarDiv>
            <RecommendToWho>
                <span style={{fontWeight:'bold'}}>아영</span>
                <span style={{color:'#707070'}}>님께 추천드려요</span>
            </RecommendToWho>
            <RecommendChip>#node js</RecommendChip>
            <RecommendChip>#javascript</RecommendChip>
            <RecommendChip>#python</RecommendChip>
        </RecommendBarDiv>
  );
};

export default React.memo(RecommendBar);