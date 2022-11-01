import React, { memo, useEffect, useState } from 'react';
import { 
  ProfileInfoDiv, ProfileFunctDiv,
} from '../../styledComponents';
import ProfileImage from './ProfileImage';
import ProfileText from './ProfileText';
import ProfileFollow from './ProfileFollow';
import ProfileTag from './ProfileTag';
import ImgPopup from './popup/ImgPopup';
import MyFanPopup from './popup/MyFanPopup';
import MyIdolPopup from './popup/MyIdolPopup';
import axios from 'axios';
import { APIURL } from '../../config/key';
import { getCookie } from '../../config/cookie';
import { useParams } from 'react-router-dom';

const ProfileInfo = memo(() => {
  //const id = getCookie('user_id');
  const params = useParams();
  const id = params.user_id;
  const [isImgUpdate, setIsImageUpdate] = useState(false);
  const [fan, setFan] = useState(false);
  const [idol, setIdol] = useState(false);
  const [hashtag, setHashtag] = useState([]);

  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);

  const [userInfo, setUserInfo] = useState({
    id: '',
    email: '',
    name: '',
    image: '',
  })
  const { email, name, image } = userInfo;
  const getUserInfo = async() => {
    const res = await axios.get(`${APIURL}/account/user/${id}`)

    if(res.status == 200){
      console.log('get user info: ', res.data)
      setUserInfo(res.data)
    } else {
      console.log('get user info fail')
    }
  }


  useEffect(() => {
    getUserInfo()
  }, [])

  return (
  <>
    {isImgUpdate && (
      <ImgPopup setPopup={setIsImageUpdate} />
    )}
    {fan && (
      <MyFanPopup setPopup={setFan} followers={followers} />
    )}
    {idol && (
      <MyIdolPopup setPopup={setIdol} followings={followings} />
    )}

    <ProfileInfoDiv>

      <ProfileImage setPopup={setIsImageUpdate} />

      <ProfileFunctDiv>
        <ProfileText name={name} id={id} email={email} />

        <ProfileFollow setFan={setFan} setIdol={setIdol} />

        <ProfileTag data={hashtag} />

      </ProfileFunctDiv>
      
    </ProfileInfoDiv>
  </>
  );
});

export default ProfileInfo;