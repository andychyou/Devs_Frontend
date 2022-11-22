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
import { RecommendToWho} from '../../styledComponents';

const SearchResultPage = () => {
  const location = useLocation()
  const [searchedList, setSearchList] = useState([])
  const searched_list = location.state.t.ids
  // console.log('searchedList',searchedList)
  useEffect(()=>(
    setSearchList(searched_list)
  ),[searchedList])
  return (
    <>
        {/* <RecommendBar></RecommendBar> */}
        <RecommendToWho style={{marginTop:"40px", marginBottom:"40px", fontSize:'24px'}}>
                <span style={{display:"table",margin:"auto",color:'#707070'}}>검색 결과</span>
          </RecommendToWho>

        {/* {searchedList  && <SearchResultCard id = {searchedList[0]}></SearchResultCard>} */}
        {searchedList != undefined &&searchedList.map((elem,idx) => (
                  <SearchResultCard key={idx} id = {elem}>
                  </SearchResultCard>
                ))}
        


    </>
  );
};

export default React.memo(SearchResultPage);
