import React, { useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHouse, faBell, faGear} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCookie, getCookie, removeCookie } from "../../config/cookie";
import { APIURL } from '../../config/key';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import AdCard from './AdCard';
import SearchResultCard from './SearchResultCard';
import RecommendBar from './RecommendBar';
const SearchResultPage = () => {
  const location = useLocation()
  const [searchedList, setSearchList] = useState([])
  const searched_list = location.state.searchResult.ids
  console.log('searchedList',searchedList)
  useEffect(()=>(
    setSearchList(location.state.searchResult.ids)
  ),[])
  return (
    <>
        <RecommendBar></RecommendBar>

        {searchedList  && <SearchResultCard id = {searchedList[0]}></SearchResultCard>}

        {/* <SearchResultCard></SearchResultCard> */}
        


    </>
  );
};

export default React.memo(SearchResultPage);