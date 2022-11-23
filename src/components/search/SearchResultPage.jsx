import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHouse,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getAllCookie, getCookie, removeCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import AdCard from "./AdCard";
import SearchResultCard from "./SearchResultCard";
import RecommendBar from "./RecommendBar";
import { RecommendToWho } from "../../styledComponents";

const SearchResultPage = () => {
  const location = useLocation();
  const params = useParams();
  const keyword = params.keyword;
  // const [keyword, setKeyword] = useState("");
  // const [keyword, setKeyword] = useState("");

  const [searchResult, setSearchResult] = useState([]);
  const Search = async () => {
    // `${APIURL}/search/${location.search.substring(9)}/`
    const res = await axios.get(`${APIURL}/search/${keyword}/`, {
      headers: { Authorization: "token " + getCookie("token") },
    });
    if (res.status == 200) {
      // console.log('res.data', res.data)
      setSearchResult(res.data.ids);
    } else {
      console.log("get user info fail");
    }
  };

  // useEffect(() => {
  //   setKeyword(location.search.substring(9));
  //   Search();
  // }, [location.search.substring(9)]);
  useEffect(() => {
    // setKeyword(params.keyword);
    Search();
  }, [keyword]);

  return (
    <>
      {/* <RecommendBar></RecommendBar> */}
      <RecommendToWho
        style={{ marginTop: "40px", marginBottom: "40px", fontSize: "24px" }}
      >
        <span style={{ display: "table", margin: "auto", color: "#707070" }}>
          {searchResult.length === 0 ? (
            <>
              <span style={{ fontWeight: "bold", color: "black" }}>
                {keyword}
              </span>
              에 대한 검색 결과가 없습니다.
            </>
          ) : (
            <>
              <span style={{ fontWeight: "bold", color: "black" }}>
                {keyword}
              </span>
              에 대한 검색 결과입니다.{" "}
            </>
          )}
        </span>
      </RecommendToWho>

      {/* {searchedList  && <SearchResultCard id = {searchedList[0]}></SearchResultCard>} */}
      {searchResult.length != 0 &&
        searchResult.map((elem, idx) => (
          <SearchResultCard key={idx} id={elem}></SearchResultCard>
        ))}
    </>
  );
};

export default React.memo(SearchResultPage);
