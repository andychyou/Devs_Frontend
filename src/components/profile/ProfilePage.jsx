import React, { memo } from "react";
import { ProfileDiv } from "../../styledComponents";

import ProfileInfo from "./ProfileInfo";
import Details from "./Details";
import OnGoing from "./OnGoing";
import Skill from "./Skill";
import Certification from "./Certification";
import Careers from "./Careers";
import Projects from "./Projects";

const ProfilePage = memo(() => {
  return (
    <>
      <ProfileInfo />

      <Details />

      <OnGoing />

      <Skill />

      {/* <Certification /> */}

      <Careers />

      <Projects />
    </>
  );
});

export default ProfilePage;
