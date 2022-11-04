import React from 'react';
import { CardDiv, ContentContainer, IdContainer, NameP, JobP, NameContainer, ProfileIntro, ProfileSkills, ProfileSpec } from '../../styledComponents';

const ProfileCard = () => {
  return (
    <CardDiv>   
        <IdContainer>
            <img style={{width:'95px', borderRadius:'50%'}} src={require('../../static/profile-img.png')}></img>
            <NameContainer>
                <NameP>최세은</NameP>
                <JobP>웹 백엔드</JobP>
            </NameContainer>
        </IdContainer>

        <ContentContainer>
          <ProfileIntro><p>“spring framework 및 django를 공부하고 있습니다”</p></ProfileIntro>
          
          <ProfileSpec>
            <p style={{display:'inline'}}>학력 |</p> 
            <p style={{display:'inline'}}>서강대학교 컴퓨터공학과</p>
            <br></br>
            <p style={{display:'inline'}}>나이 |</p>
            <p style={{display:'inline'}}>24살 (1999년생)</p>
          </ProfileSpec>

          <ProfileSkills>
            <p>Programming Languages</p>
            <p >Python, C, java, ...</p>
          </ProfileSkills>
        </ContentContainer>
    </CardDiv>
  );
};

export default React.memo(ProfileCard);