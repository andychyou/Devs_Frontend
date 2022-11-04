import React from 'react';
import { AdContentP, AdText, CardDiv, IdContainer, JobP, NameP, NameContainer } from '../../styledComponents';

const AdCard = () => {
  return (
    <CardDiv style={{backgroundColor:'#e5dde7'}}>   

        <IdContainer>
            <img style={{width:'95px', borderRadius:'50%'}} src={require('../../static/profile-img.png')}></img>
            <NameContainer>
                <NameP>코드라이언</NameP>
                <JobP>인터넷 강의</JobP>
            </NameContainer>
        </IdContainer>

        <div>
          <AdContentP>K-Digital Training은 멋쟁이사자처럼과 고용노동부가 함께하는. IT 인재양성 프로그램으로. 내일배움카드가 있다면 무료로 수강할 수 있는 온/오프라인 통합 과정입니다.</AdContentP>
        </div>

        <AdText>
          광고
        </AdText>

    </CardDiv>
  );
};

export default React.memo(AdCard);