import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHouse, faBell, faGear} from "@fortawesome/free-solid-svg-icons";

import ProfileCard from './ProfileCard';
import AdCard from './AdCard';
import SearchResultCard from './SearchResultCard';
import RecommendBar from './RecommendBar';
const SearchResultPage = () => {
  return (
    <>

        <RecommendBar></RecommendBar>


        <SearchResultCard></SearchResultCard>
        


    </>
  );
};

export default React.memo(SearchResultPage);