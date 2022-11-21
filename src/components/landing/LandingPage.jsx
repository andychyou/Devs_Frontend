import React from "react";
import {
  LandingDiv,
  DevsText,
  LandingContent,
  LandingFooter,
  LandingWrap,
} from "../../styledComponents";
import LandingInfo from "./LandingInfo";
import Register from "./Register";
import LandingTextComp from "./LandingTextComp";

const LandingPage = () => {
  return (
    <>
      <LandingDiv>
        <LandingTextComp />

        <LandingWrap>
          <LandingContent>
            <LandingInfo />

            <Register />
          </LandingContent>
        </LandingWrap>

        <LandingFooter />
      </LandingDiv>
    </>
  );
};

export default React.memo(LandingPage);
