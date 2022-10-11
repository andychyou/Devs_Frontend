import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHouse, faBell, faGear} from "@fortawesome/free-solid-svg-icons";

import ProfileCard from './ProfileCard';
import AdCard from './AdCard';
import RecommendBar from './RecommendBar';
import { RecommendDiv, SuggestP } from '../../styledComponents';
const SearchPage = () => {
  return (
    <>
       <RecommendBar></RecommendBar>

       <SuggestP>
            이 프로필은 어떠세요?
        </SuggestP>
        <RecommendDiv>
            <ProfileCard></ProfileCard>
            <ProfileCard></ProfileCard>
            <AdCard></AdCard>
            <AdCard></AdCard>
            <AdCard></AdCard>
        </RecommendDiv>


    </>
  );
};

export default React.memo(SearchPage);