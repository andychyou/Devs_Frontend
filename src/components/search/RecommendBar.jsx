import React,{ useEffect, useState }  from 'react';
import { RecommendBarDiv, RecommendChip, RecommendToWho } from '../../styledComponents';
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCookie, getCookie, removeCookie } from "../../config/cookie";
import { APIURL } from '../../config/key';
import axios from 'axios';

const RecommendBar = () => {
  
  return (
        <RecommendBarDiv>
            <RecommendToWho>
                <span style={{fontWeight:'bold'}}>{getCookie("user_id")}</span>
                <span style={{color:'#707070'}}>님께 추천드려요</span>
            </RecommendToWho>
            <RecommendChip>#node js</RecommendChip>
            <RecommendChip>#javascript</RecommendChip>
            <RecommendChip>#python</RecommendChip>
        </RecommendBarDiv>
  );
};

export default React.memo(RecommendBar);