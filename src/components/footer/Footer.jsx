import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FooterDiv, FooterFlex, FooterText } from "../../styledComponents";

const Footer = () => {
  const location = useLocation();
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const path = location.pathname;

    if (path === "/" || path === "/login") {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [location.pathname]);
  return (
    <>
      {display && (
        <FooterDiv>
          <FooterText>🦁 멋쟁이사자처럼 서강 🦁</FooterText>
          <FooterText>곽도영 김아영 윤태호 최세은 유창호</FooterText>
          <FooterText type="big">
            Copyright ⓒ 2022 멍발자들. All right Reserved.
          </FooterText>
        </FooterDiv>
      )}
    </>
  );
};

export default React.memo(Footer);
