import React, { memo } from 'react';
import { 
  ProfileTextDiv, ProfileName, ProfileEditBtn, 
  ProfileDesc
} from '../../styledComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import axios from 'axios';
import { APIURL } from '../../config/key';
import { getCookie } from '../../config/cookie';
import { useState } from 'react';

const ProfileText = memo(({ name, email, id }) => {
  
  return (
    <>
      <ProfileTextDiv>
        <ProfileName>
          {name}
          <ProfileEditBtn>
            <FontAwesomeIcon icon={faGear} />
          </ProfileEditBtn>
        </ProfileName>
        <ProfileDesc>{id}</ProfileDesc>
        <ProfileDesc>{email}</ProfileDesc>
      </ProfileTextDiv>
    </>
  );
});

export default ProfileText;