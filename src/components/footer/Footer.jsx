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
          <FooterText>π¦ λ©μμ΄μ¬μμ²λΌ μκ° π¦</FooterText>
          <FooterText>κ³½λμ κΉμμ μ€ννΈ μ΅μΈμ μ μ°½νΈ</FooterText>
          <FooterText type="big">
            Copyright β 2022 λ©λ°μλ€. All right Reserved.
          </FooterText>
        </FooterDiv>
      )}
    </>
  );
};

export default React.memo(Footer);
