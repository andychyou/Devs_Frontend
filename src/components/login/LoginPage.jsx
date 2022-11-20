import React from "react";
import {
  LandingDiv,
  LandingContent,
  LandingFooter,
  LoginImg1,
  LoginImg2,
  LandingWrap,
} from "../../styledComponents";
import LandingTextComp from "../landing/LandingTextComp";
import LoginInput from "./LoginInput";

const LoginPage = () => {
  return (
    <>
      <LandingDiv>
        <LandingTextComp />

        <LoginImg1 src={require("../../static/login-1.png")} />
        <LoginImg2 src={require("../../static/login-2.png")} />

        <LandingWrap>
          <LandingContent>
            <LoginInput />
          </LandingContent>
        </LandingWrap>

        <LandingFooter />
      </LandingDiv>
    </>
  );
};

export default React.memo(LoginPage);
