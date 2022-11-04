import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import { ProfileContentSection, ProfileSkillDiv, ProfileSkillHeader, ProfileSkillSpecificDiv, ProfileSkillName, ProfileSkillEditBtn} from '../../../styledComponents';

const ProfilePage3 = () => {
  return (
    <>


        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ProfileContentSection>
            <ProfileSkillDiv>
                <ProfileSkillHeader>
                    <ProfileSkillName>Programming Languages - Javascript</ProfileSkillName>
                    <ProfileSkillEditBtn>
                        <FontAwesomeIcon style={{color:'white'}}icon={faPen}></FontAwesomeIcon>
                    </ProfileSkillEditBtn>
                </ProfileSkillHeader>
                
                <ProfileSkillSpecificDiv>
                    <FontAwesomeIcon style={{marginLeft: '40px'}} icon={faClipboardCheck} size='xl'></FontAwesomeIcon>
                    <p>[Javascript] 자바스크립트의 데이터 타입</p>
                </ProfileSkillSpecificDiv>
                <ProfileSkillSpecificDiv>
                    <FontAwesomeIcon style={{marginLeft: '40px'}} icon={faClipboardCheck} size='xl'></FontAwesomeIcon>
                    <p>[JavaScript] 자바스크립트의 fetch & axios</p>
                </ProfileSkillSpecificDiv>
                <ProfileSkillSpecificDiv>
                    <FontAwesomeIcon style={{marginLeft: '40px'}} icon={faClipboardCheck} size='xl'></FontAwesomeIcon>
                    <p>[JavaScript] 자바스크립트의 콜백 함수 Callback</p>
                </ProfileSkillSpecificDiv>
            </ProfileSkillDiv>
        </ProfileContentSection>
        </div>
    </>
  );
};

export default React.memo(ProfilePage3);