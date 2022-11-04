import React from 'react';
import { SearchResultDiv, SearchResultImg, SearchResultDetail, SearchResultIntroBox, SearchResultButton } from '../../styledComponents';

const SearchResultCard = () => {
  return (
    <SearchResultDiv>
    <SearchResultImg src={require('../../static/profile-img.png')}></SearchResultImg>         
      <SearchResultDetail>
          <div style={{fontSize: '30px', fontWeight: '700'}}>도영</div>
          <div>
            <span style={{fontSize: '24px'}}>Frontend</span>
            <span style={{fontSize: '24px'}}>@ job</span>
          </div>              
          <div style={{fontSize: '24px'}}>school</div>
      </SearchResultDetail>
      <SearchResultIntroBox>
        <p>
          axios get intro
        </p>
      </SearchResultIntroBox>
      
      <SearchResultButton>
          IDOL 등록
      </SearchResultButton>
    </SearchResultDiv>
  );
};

export default React.memo(SearchResultCard);