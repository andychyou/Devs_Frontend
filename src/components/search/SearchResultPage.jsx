import React, { useEffect, useState, useRef } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHouse, faBell, faGear} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  const [keyword, setKeyword] = useState("")
  // console.log('aaaaaaa', location.search.substring(9) )
  // const searched_list = location.state.t.ids
  const [searchResult,setSearchResult] = useState({})
  const Search = async () => {
    const res = await axios.get(`${APIURL}/search/${location.search.substring(9)}/`, {
      headers: { Authorization: "token " + getCookie("token") },
    });
    if (res.status == 200) {
      // console.log('res.data', res.data)
      setSearchResult( res.data)
      // console.log('search result inside', searchResult)
    } else {
      console.log("get user info fail");
    }
  };

  useEffect(()=>{
    setKeyword(location.search.substring(9))
    Search()
  } ,[location.search.substring(9)])
  // console.log('keyword', keyword)
  // console.log('locationnnnn', location.search.substring(9))
  // console.log('search resulttttt', searchResult)

  return (
    <>
        {/* <RecommendBar></RecommendBar> */}
        <RecommendToWho style={{marginTop:"40px", marginBottom:"40px", fontSize:'24px'}}>
                <span style={{display:"table",margin:"auto",color:'#707070'}}>검색 결과</span>
          </RecommendToWho>

        {/* {searchedList  && <SearchResultCard id = {searchedList[0]}></SearchResultCard>} */}
        {searchResult.ids != undefined &&searchResult.ids.map((elem,idx) => (
                  <SearchResultCard key={idx} id = {elem}>
                  </SearchResultCard>
                ))}
        


    </>
  );
};

export default React.memo(SearchResultPage);
