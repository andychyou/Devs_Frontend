import React from "react";
import { useNavigate } from "react-router-dom";
import { DevsLogo, DevsText, LandingHead } from "../../styledComponents";

const LandingTextComp = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/main");
  };
  return (
    <LandingHead>
      <DevsText>
        <DevsLogo src="/logo.jpeg" />
        <div>뎁스 devStory</div>
      </DevsText>
    </LandingHead>
  );
};

export default React.memo(LandingTextComp);
