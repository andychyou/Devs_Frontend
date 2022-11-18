import React from 'react';
import { 
  FooterDiv, FooterFlex, FooterText
} from '../../styledComponents';

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <FooterFlex>
        <FooterText style={{fontWeight:"bold"}}>
        Team Devs
        </FooterText>
        <FooterText>
            곽도영 김아영 
        </FooterText>
        <FooterText>
        윤태호 최세은 유창호 
        </FooterText>
        </FooterFlex>
      </FooterDiv>
    </>
  );
};

export default React.memo(Footer);