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
          <FooterText
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "7px",
            }}
          >
            Team Devs
          </FooterText>
          <FooterText>곽도영 김아영</FooterText>
          <FooterText>윤태호 최세은 유창호</FooterText>
        </FooterDiv>
      )}
    </>
  );
};

export default React.memo(Footer);
