import React, { memo, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import { ProfileDiv } from "../../styledComponents";

const Profile = memo(() => {
  const [isAdmin, setIsAdmin] = useState(false);
  const params = useParams();

  useEffect(() => {
    const cookie_id = getCookie("user_id");
    const param_id = params.user_id;

    // console.log(cookie_id, param_id);
    if (cookie_id === param_id) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [params.user_id]);

  return (
    <>
      <ProfileDiv>
        <Outlet context={{ isAdmin }} />
      </ProfileDiv>
    </>
  );
});

export default Profile;
