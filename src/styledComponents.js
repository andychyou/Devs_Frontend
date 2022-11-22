import styled, { css } from "styled-components";

// landing page
export const LandingDiv = styled.div`
  width: 100%;
  // min-height: calc(100vh - 100px);
  // height: calc(100% - 240px);
  // padding-bottom: 240px;
  height: 100%;
  background-color: #ffe082;
  position: absolute;
  z-index: -5;
  // position: relative;
  // display: flex;
  // justify-content: cetner;
  // align-items: cetner;
`;

// ${() => {
//   const w = document.documentElement.scrollWidth
//   return css`
//     width: ${w}px;
//   `
// }}

export const LandingHead = styled.div`
  // background-color: orange;
  width: 100%;
  // height: 100px;
  height: 10vh;
  position: absolute;
  top: 0;
  right: 0;
`;
export const DevsText = styled.div`
  // background-color: aqua;
  // width: 1700px;
  // width: calc(100% - 80px);
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  // padding-left: 80px;
  padding-left: 7vw;
  // font-weight: 500;
  font-weight: bold;
  // font-size: 28px;
  font-size: 3vh;
  // cursor: pointer;
`;

export const LandingWrap = styled.div`
  // width: 100%;
  // height: 100%;
  // background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingContent = styled.div`
  // width: max-content;
  margin: 0 auto;
  height: 80%;
  width: 80%;
  // width: max-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  // background-color: aqua;
`;

export const LandingInfoDiv = styled.div`
  // margin-top: 50px;
  // margin-right: 100px;
  // background-color: white;
  height: max-content;
  // width: 610px;
  width: 45%;
`;

export const LandingInfoBig = styled.div`
  font-weight: 700;
  // font-size: 32px;
  font-size: 2vw;
  // margin-bottom: 30px;
  margin-bottom: 3vh;
`;

export const LandingInfoSmall = styled.div`
  font-weight: 400;
  // font-size: 20px;
  font-size: 1.2vw;
  // line-height: 35px;
  line-height: 3vh;
`;
// background-image: url(./landing-img.png);
export const LandingImg = styled.img`
  display: inline-block;
  //width: 751px;
  //height: 599px;
  // background-color: aqua;
  width: 100%;
  // height: calc(100% * 0.7976);
  height: max-content;
  margin-top: 30px;
  object-fit: contain;
`;

export const RegisterDiv = styled.div`
  background-color: #fff8e1;
  // margin-left: 150px;
  // margin-top: -40px;
  // width: 460px;
  // width: 500px;
  // height: 800px;
  height: 100%;
  width: 35%;
  //width: 30vw;
  //height: calc(30vw * 1.5);
  border-radius: 8px;
  //border-radius: 0.8vh;
  position: relative;
`;

export const RegisterText = styled.div`
  font-weight: 700;
  // font-size: 26px;
  font-size: 1.2vw;
  // line-height: 100px;
  line-height: 4vw;
  width: 100%;
  text-align: center;
  // background-color: white;
`;

export const RegisterUl = styled.ul`
  width: 85%;
  // width: 100%;
  margin: 0 auto;
`;

export const RegisterLi = styled.li`
  // margin-bottom: 30px;
  // padding-bottom: 25px;
  // background-color: orange;
  position: relative;
  margin-bottom: 3vh;
`;

export const RegisterInputText = styled.div`
  font-weight: 400;
  // font-size: 18px;
  font-size: 1.8vh;
`;

export const RegisterInput = styled.input`
  //display: inline-block;
  border: none;
  border-radius: 0.7vh;
  //border-radius: 0.7vh;
  width: calc(100% - 2vw);
  padding: 0 1vw;
  // height: 35px;
  height: 4vh;
  // margin: 5px 0 0;
  margin-top: 0.7vh;
  font-size: 1.6vh;
`;
export const WrongInputText = styled.div`
  // font-size: 12px;
  font-size: 1.1vh;
  color: red;
  position: absolute;
  right: 0;
  // top: 0.2vh;
  top: 3px;
  //bottom: 0;
`;

export const RegisterBtn = styled.div`
  background-color: #ffd249;
  width: 85%;
  // line-height: 35px;
  line-height: 4vh;
  font-weight: 700;
  // font-size: 18px;
  font-size: 1.8vh;
  text-align: center;
  // border-radius: 50px;
  border-radius: 5vh;
  cursor: pointer;
  // margin: 10px auto 0;
  margin: 3vh auto 0;
`;

export const AlreadyRegister = styled.div`
  // width: 150px;
  // line-height: 30px;
  // background-color: white;
  width: 100%;
  text-align: center;
  font-size: 1.3vh;
  margin-top: 2vh;

  color: #0d4ae9;
  // position: absolute;
  // left: calc(100% / 2);
  // margin-top: 30px;
  // margin-left: -75px;
  cursor: pointer;
`;

export const LandingFooter = styled.div`
  background-color: #ffb300;
  width: 100%;
  // height: 240px;
  height: 30vh;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -3;
`;
// login
export const LoginDiv = styled.div`
  background-color: #fff8e1;
  // margin-top: 10vh;
  // width: 652px;
  // height: 541px;
  // border-radius: 8px;
  border-radius: 1vh;
  width: 37vw;
  height: 33vw;
  //border-radius: 0.8vh;
  position: relative;
  z-index: 10;
`;
export const LoginImgDiv = styled.div`
  display: flex;
`;
export const LoginImg1 = styled.img`
  // background-color: orange;
  display: inline-block;
  width: 35vw;
  height: max-content;
  // width: 700px;
  // height: calc(700px * 0.89);

  object-fit: contain;
  position: absolute;
  // top: 93px;
  top: 9vh;
  left: 0;
`;

export const LoginImg2 = styled.img`
  //background-color: aqua;
  display: inline-block;
  // width: 700px;
  // height: calc(700px * 0.79);
  width: 35vw;
  height: max-content;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 6;
`;

export const LoginBtnDiv = styled.div`
  color: #0d4ae9;
  display: flex;
  // justify-content: space-between;
  justify-content: center;
  width: 100%;
  margin-top: 3vh;
  // margin: 150px auto 0;
`;

export const LoginBtn = styled.div`
  cursor: pointer;
  font-size: 0.8vw;
  margin: 0 0.5vw;
  width: max-content;
`;

// Profile Page
export const ProfileDiv = styled.div`
  background-color: rgba(255, 224, 130, 0.3);
  // width: 963px;
  width: calc(923px + 100px);
  min-height: 800px;
  margin: 50px auto;
  padding: 50px;
  border-radius: 10px;
`;

export const ProfileInfoDiv = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  // background-color: orange;
  position: relative;
`;

export const ProfileImgDiv = styled.div`
  width: 150px;
  height: max-content;
  position: relative;
  // background-color: white;
`;

export const ProfileImg = styled.img`
  display: inline-block;
  border-radius: 50%;
  background-color: white;
  width: 150px;
  height: 150px;
  object-fit: contain;
`;
export const ProfileImgIcon = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 150px;
  height: 150px;
  color: #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImgEditBtn = styled.span`
  display: inline-block;
  width: 35px;
  height: 35px;
  // line-height: 30px;
  border-radius: 50%;
  background-color: black;
  border: 2px solid white;
  color: white;
  //text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5px;
  bottom: 5px;
  cursor: pointer;
`;
// --------------------------------------
export const ProfileFunctWrap = styled.div`
  width: calc(100% - 150px);
  // background-color: aqua;
`;

export const ProfileFunctDiv = styled.div`
  // background-color: orange;
  width: 100%;
  display: flex;
  // flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

// -----------
export const ProfileTextDiv = styled.div`
  // background-color: aqua;
  width: calc(100% - 374px);
  height: max-content;
  margin-left: 30px;
`;

export const ProfileName = styled.p`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  line-height: 44px;
`;

export const ProfileEditBtn = styled.span`
  margin-left: 10px;
  cursor: pointer;
  font-size: 18px;
`;

export const ProfileDesc = styled.p`
  // line-height: 22px;
  margin-bottom: 7px;
  display: flex;
  // justify-content: center;
  align-items: center;
  // background-color: white;
`;
// ----------
export const FollowDiv = styled.div`
  // background-color: white;
  width: max-content;
  height: max-content;
  display: flex;
`;
export const FanIdolDiv = styled.div`
  display: flex;
  background-color: #d9d9d9;
  width: max-content;
  height: max-content;
  border-radius: 7px;
`;
export const FanIdolSmallDiv = styled.div`
  text-align: center;
  width: 92px;
  height: 60px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const FanIdolText = styled.div`
  font-size: 12px;
  margin: 6px;
  // background-color: orange;
`;
export const FanIdolNum = styled.div`
  font-size: 18px;
  font-weight: bold;
  // background-color: aqua;
  margin-top: 3px;
`;
export const FollowBtn = styled.div`
  width: 124px;
  line-height: 54px;
  border-radius: 7px;
  background-color: #b299b0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-left: 30px;
  cursor: pointer;
  border: 3px solid #b299b0;
  transition: 0.4s;

  &:hover {
    background-color: white;
  }
`;
// ----------
export const TagDiv = styled.div`
  // background-color: white;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  width: max-content;
  height: max-content;
  margin-left: 20px;
  margin-top: 10px;

  ${(props) => {
    if (props.type === "init") {
      return css`
        margin-left: 10px;
      `;
    }
  }}
`;
export const Tag = styled.div`
  line-height: 20px;
  width: max-content;
  padding: 0 10px;
  margin: 7px 7px 0;
  background-color: #d9d9d9;
  border-radius: 20px;
  font-size: 12px;
`;

export const TagXmark = styled.div`
  cursor: pointer;
  display: inline-block;
  width: max-content;
  margin-left: 7px;
  color: black;
`;

export const TagAddIcon = styled.div`
  background-color: black;
  height: 20px;
  // width: 20px;
  padding: 0 10px;
  margin-left: 20px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-top: 7px;
`;

export const TagAddInput = styled.input`
  line-height: 20px;
  width: max-content;
  padding: 0 10px;
  margin: 7px 7px 0;
  background-color: white;
  border: none;
  border-radius: 20px;
  font-size: 12px;

  ${(props) => {
    if (props.margin === "init") {
      return css`
        margin-left: 20px;
      `;
    }
  }}
`;
// --------------------------------------
export const DescDiv = styled.div`
  width: 100%;
  // background-color: orange;
  margin: 40px 0;
  position: relative;
`;

export const SaveBtn = styled.div`
  background-color: #ffb300;
  width: 60px;
  line-height: 30px;
  color: white;
  text-align: center;
  border-radius: 7px;
  cursor: pointer;

  position: absolute;
  top: 0;
  right: 70px;
`;

export const DescHeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  margin-bottom: 10px;
`;
export const DescHeadText = styled.p`
  font-weight: bold;
  margin-left: 20px;
`;
export const DescEditBtn = styled.span`
  // display: inline-block;
  width: 25px;
  height: 25px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  // line-height: 30px;
  background-color: black;
  color: white;
  // text-align: center;
  border-radius: 7px;
  cursor: pointer;
  margin-right: 20px;
`;
export const DescContentsDiv = styled.div`
  background-color: white;
  max-width: 100%;
  // width: 923px;
  padding: 20px;
  height: max-content;
  border-radius: 5px;
`;
export const DescSmallDiv = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;
export const SmallDiv = styled.div`
  width: 50%;
  // background-color: aqua;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SmallLabel = styled.div`
  text-align: center;
  width: 120px;
`;
export const SmallBox = styled.div`
  width: calc((923px / 2) - 120px);
  // width: calc(100% - 120px - 20px);
  min-height: 35px;
  line-height: 35px;
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 0 10px;
`;
export const SmallInput = styled.input`
  // width: calc(((100% - 40px) / 2) - 120px);
  width: calc((923px / 2) - 120px);
  line-height: 35px;
  background-color: #ffe5b2;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
`;

export const BigDiv = styled.div`
  width: 100%;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BigBox = styled.div`
  // width: calc(983px - 120px);
  width: calc(100% - 160px + 10px);
  min-height: 100px;
  line-height: 100px;
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 0 10px;
  // margin: 0 auto;
`;

export const BigInput = styled.textarea`
  // width: calc(923px - 120px);
  width: calc(100% - 160px + 10px);
  height: 100px;
  max-height: 100px;
  background-color: #ffe5b2;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  margin: 0 auto;
`;
// -----------------------------------------
export const CurrentStudy = styled.div`
  background-color: #f4f4f4;
  max-width: 100%;
  padding: 30px;
  border-radius: 5px;
`;
export const CurrentInput = styled.input`
  background-color: #ffe5b2;
  width: calc(100% - 60px);
  border: none;
  border-radius: 5px;
  padding: 30px;
`;

export const SkillSetDiv = styled.div`
  max-width: 100%;
`;

export const SkillHeadDiv = styled.div`
  max-width: 100%;
  background-color: rgba(215, 203, 161, 0.65);
  line-height: 48px;
  font-weight: bold;
  padding-left: 20px;
`;
export const SkillContents = styled.div`
  background-color: #f4f4f4;
  max-width: 100%;
  min-height: 63px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 0;
`;
export const SkillDiv = styled.div`
  background-color: white;
  width: calc(100% / 4 - 34px);
  height: 35px;
  margin: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border: 2px solid white;

  &:hover {
    border-color: rgba(215, 203, 161, 1);
  }
`;

export const LicenceDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export const LicenceBox = styled.div`
  background-color: rgba(208, 191, 105, 0.65);
  //width: calc(923px / 4 - 30px);
  width: calc(883px / 4 - 30px);
  margin: 15px;
  line-height: 40px;
  border-radius: 20px;
  text-align: center;
`;
export const CareerDiv = styled.div`
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 20px 20px 10px;
  margin: 20px 0;
  position: relative;
`;

export const CareerHoverDiv = styled.div`
  position: absolute;
  // background-color: orange;
  top: 10px;
  right: 10px;
  display: flex;
`;
export const CareerHoverBox = styled.div`
  // line-height: 30px;
  text-align: center;
  // width: 70px;
  padding: 7px 10px;
  color: white;
  margin: 0 3px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;

  ${(props) => {
    if (props.type === "edit") {
      return css`
        background-color: #999999;

        &:hover {
          background-color: black;
        }
      `;
    } else if (props.type === "delete") {
      return css`
        background-color: #e37979;

        &:hover {
          background-color: #ea1010;
        }
      `;
    } else if (props.type === "save") {
      return css`
        background-color: #ffb300;
      `;
    }
  }};
`;

export const CareerBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  // background-color: orange;
`;
export const Career = styled.div`
  background-color: rgba(215, 203, 161, 0.65);
  width: calc(923px / 3 - 45px);
  line-height: 35px;
  border-radius: 5px;
  padding: 0 10px;

  ${(props) => {
    if (props.type === "text") {
      return css`
        background-color: rgba(0, 0, 0, 0);
        font-weight: bold;
      `;
    }
  }}
`;

export const CareerInput = styled.input`
  background-color: #ffe5b2;
  width: calc(923px / 3 - 45px);
  line-height: 35px;
  padding: 0 10px;
  border: none;
  border-radius: 5px;

  ${(props) => {
    if (props.type === "small") {
      return css`
        width: calc((923px / 3 - 45px) / 2 - 20px);
        margin: 0 5px;
      `;
    }
  }}
`;

export const CareerDescDiv = styled.div`
  max-width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  /* background-color: aqua; */
  margin-bottom: 20px;
`;
export const CareerText = styled.div`
  width: 100px;
  line-height: 35px;
  text-align: center;
`;
export const CareerDesc = styled.div`
  background-color: white;
  min-height: 25px;
  /* height: max-content; */
  width: calc(923px - 100px);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  white-space: pre-wrap;
`;

export const CareerDescInput = styled.textarea`
  background-color: #ffe5b2;
  width: calc(923px - 100px);
  // min-height: 35px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

// Profile Image Upload
export const ImageDiv = styled.div`
  // background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageInputDiv = styled.div`
  // background-color: white;
  // width: max-content;
  width: 82px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const ImageInput = styled.input`
  // background-color: rgba(178, 153, 176, 1);
  // margin: 0 auto;
`;

export const ImageBox = styled.div`
  width: 300px;
  height: 300px;
  border: 3px solid white;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageIconStyle = {
  color: "#d0d0d0",
  fontSize: "150px",
};

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: white;
`;

export const ImageUploadBtn = styled.div`
  background-color: #ffb300;
  border: 2px solid #ffb300;
  color: white;
  font-weight: bold;
  text-align: center;
  width: 300px;
  line-height: 40px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.45s;

  &:hover {
    background-color: white;
    color: #ffb300;
  }
`;

export const EditProfileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  // background-color: orange;
  margin: 10px 0;
  font-size: 18px;
`;
export const EditLabel = styled.div`
  width: 150px;
  // background-color: aqua;
  text-align: center;
  font-weight: bold;
`;
export const EditInput = styled.input`
  padding: 10px;
  width: calc(100% - 150px - 50px);
  border: none;
  border-radius: 5px;
`;

export const ProjectDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  // background-color: orange;
`;

export const ProjectBox = styled.div`
  background-color: #f4f4f4;
  width: calc(100% / 4 - 34px);
  max-width: calc(100% / 3 - 34px);
  overflow: hidden;
  // height: 268px;
  height: 212px;
  margin: 15px;
  border: 2px solid rgba(72, 72, 72, 0.5);
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: 2px solid rgba(72, 72, 72, 1);
  }
`;

export const ProjectName = styled.div`
  text-decoration: underline;
  text-underline-position: under;
  text-weight: bold;
  font-size: 22px;
  // background-color: orange;
  max-width: calc(100% - 30px);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  word-wrap: break-word;
`;

export const ProjectTextWrap = styled.div`
  // background-color: aqua;
  margin: 15px 0;
  margin-left: 5px;
`;

export const ProjectTextDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  overflow: hidden;
  word-wrap: break-word;
`;

export const ProjectTextLabel = styled.div`
  border-radius: 15px;
  padding: 5px 10px;
  margin: 10px;
  font-size: 12px;

  ${(props) => {
    if (props.type === "position") {
      return css`
        background-color: #7bcdcf;
      `;
    } else if (props.type === "skill") {
      return css`
        background-color: #8dcf7b;
      `;
    }
  }}
`;

export const ProjectText = styled.div``;

//Profile3

export const ProfileContentSection = styled.section`
  // width: 1000px;
  width: 100%;
  min-height: 750px;
  background-color: rgba(255, 224, 130, 0.3);
  // display: flex;
  // justify-content: center;
  // margin-top: 100px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

export const ProfileSkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  font-weight: bold;
  font-size: 22px;
`;

export const ProfileSkillDiv = styled.div`
  width: 900px;
  margin: 0 auto;
`;

export const ProfileSkillDetailEmptyDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  color: #7e7e7e;
`;

export const ProfileSkillSpecificDiv = styled.div`
  display: flex;
  background-color: white;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const ProfileSkillSpecificTitle = styled.p`
  // background-color: orange;
`;

export const ProfileSkillSpecificDate = styled.p`
  color: #979797;
  font-size: 14px;
  position: absolute;
  right: 20px;
`;

export const ProfileSkillName = styled.p`
  justify-self: start;
  font-weight: bold;
`;

export const ProfileSkillEditBtnDiv = styled.div`
  // background-color: orange;
  display: flex;
`;

export const ProfileSkillEditBtn = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  // line-height: 30px;
  background-color: black;
  color: white;
  // text-align: center;
  border-radius: 7px;
  cursor: pointer;
  margin: 0 5px;
`;

// POPUP
export const PopupDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupBox = styled.div`
  width: 723px;
  // height: 90%;
  background-color: #fcf4de;
  padding: 20px 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  position: relative;

  ${(props) => {
    if (props.type === "career") {
      return css`
        height: 90%;
      `;
    }
  }}
`;

export const PopupHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const PopupText = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

export const PopupXMark = {
  cursor: "pointer",
  fontSize: "28px",
};

export const PopupInputDiv = styled.div`
  flexgrow: 3;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const PopupInputWrap = styled.div`
  position: relative;
  // background-color: orange;
`;

export const PopupWrongInput = styled.div`
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 10px;
  color: red;
`;

export const PopupInputText = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const PopupInput = styled.input`
  width: 670px;
  line-height: 35px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;

  &:disabled {
    background-color: #f9f9f9;
  }
`;

export const PopupDropDiv = styled.div`
  width: 670px;
  height: 40px;
  background-color: aqua;
  padding: 0 10px;
  background-color: white;
  border: 2px solid #a1a1a1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
`;

export const PopupDropBox = styled.div`
  width: 100%;
  background-color: #ececec;
  position: absolute;
  bottom: -102px;
  left: 0;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
`;

export const PopupDropItem = styled.div`
  width: calc(100% - 20px);
  padding: 0 10px;
  line-height: 50px;

  &:hover {
    background-color: #ffd574;
  }
`;

export const PopupDateDiv = styled.div`
  width: 670px;
  display: flex;
  margin-bottom: 30px;
`;

export const PopupDateSmall = styled.div`
  width: 50%;
  // background-color: orange;
`;
export const PopupDateText = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;
export const PopupDateInputDiv = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
`;

export const PopupDateInput = styled.input`
  width: 43%;
  line-height: 35px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  margin-right: 25px;

  &:disabled {
    background-color: #f9f9f9;
  }
`;

export const PopupTextarea = styled.textarea`
  flex-grow: 3;
  width: 670px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  &:disabled {
    background-color: #f9f9f9;
  }
`;

export const PopupSaveBtn = styled.div`
  background-color: #ffb300;
  font-weight: bold;
  font-size: 18px;
  width: 150px;
  color: white;
  line-height: 36px;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  border: 2px solid #ffb300;
  transition: 0.45s;
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;

  &:hover {
    color: #ffb300;
    background-color: white;
  }
`;

export const FormSubmitBtn = styled.input`
  background-color: #ffb300;
  font-weight: bold;
  font-size: 18px;
  width: 150px;
  color: white;
  line-height: 36px;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  border: 2px solid #ffb300;
  transition: 0.45s;
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;

  &:hover {
    color: #ffb300;
    background-color: white;
  }
`;

// Post Page
export const PostDiv = styled.div`
  width: calc(100% - 60px);
  padding: 0 30px 100px;
  min-height: 750px;
  padding-bottom: 50px;
  background-color: white;
  position: relative;
`;

export const PostCategoryDiv = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  color: rgba(72, 72, 72, 0.5);
  border-radius: 2px;
  padding: 5px 7px;
  background-color: white;
  font-size: 12px;
`;

export const PostTitleInput = styled.input`
  margin: 50px 0 20px;
  width: calc(100% - 20px);
  padding: 0 10px;
  // background-color: orange;
  border: none;
  border-bottom: 1px solid rgba(72, 72, 72, 0.5);
  line-height: 80px;
  font-weight: bold;
  font-size: 30px;

  &:focus {
    outline: none;
  }
`;

export const PostTitle = styled.div`
  margin: 0 0 20px;
  width: calc(100% - 20px);
  // padding: 50px 10px 15px;
  padding: 50px 10px 0;
  // background-color: orange;
  border-bottom: 1px solid rgba(72, 72, 72, 0.5);
  line-height: 80px;
  font-weight: bold;
  font-size: 30px;
`;

export const PostContents = styled.textarea`
  width: 100%;
  max-width: 100%;
  // background-color: orange;
  border: none;
  padding: 0;
  // min-height: calc(100% - 121px);
  line-height: 35px;
  resize: none;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const PostDetailContents = styled.div`
  width: 100%;
  max-width: 100%;
  // background-color: orange;
  border: none;
  padding: 0;
  // min-height: calc(100% - 121px);
  line-height: 35px;
  resize: none;
  font-size: 16px;
  white-space: pre-wrap;
`;

export const PostBtnDiv = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;

  ${(props) => {
    if (props.size === "big") {
      return css`
        right: 20px;
        bottom: 20px;
      `;
    }
  }}
`;

export const PostBtn = styled.div`
  background-color: #ffb300;
  padding: 5px 10px;
  color: white;
  border: 2px solid #ffb300;
  transition: 0.3s;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #ffb300;
  }

  ${(props) => {
    if (props.size === "big") {
      if (props.type === "delete") {
        return css`
          background-color: black;
          border-color: black;
          margin-left: 10px;
          padding: 0 15px;
          line-height: 36px;
          font-size: 18px;
          font-weight: bold;

          &:hover {
            color: black;
          }
        `;
      } else {
        return css`
          padding: 0 15px;
          line-height: 36px;
          font-size: 18px;
          font-weight: bold;
        `;
      }
    } else if (props.type === "delete") {
      return css`
        background-color: black;
        border-color: black;
        margin-left: 10px;

        &:hover {
          color: black;
        }
      `;
    }
  }}
`;

//팬, 아이돌 팝업

export const EmptyFanIdol = styled.div`
  // background-color: orange;
  width: 100%;
  text-align: center;
  color: rgba(72, 72, 72, 0.5);
  line-height: 100px;
`;

export const CardUnit = styled.section`
  display: flex;
  align-items: center;
  background-color: #ede4b4;
  border-radius: 20px;
  // width: 600px;
  width: 90%;
  // height: 180px;
  padding: 10px;
  margin: 5px 0;
`;

export const CardImgNameBox = styled.div`
  display: flex;
  // flex: 1;
  // justify-content: space-evenly;
  align-items: center;
  // background-color: orange;
`;
export const CardImg = styled.img`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  margin: 0 20px;
  cursor: pointer;
  background-color: white;
`;

export const CardUserName = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
`;

export const CardUserDesc = styled.div`
  // flex: 2;
  font-size: 18px;
  // background-color: aqua;
  color: #979797;
`;

export const TwoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 40px;
`;

//Navbar
export const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffe082;
`;
export const NavBar = styled.div`
  height: 60px;
  background-color: #ffe082;
  width: 100%;
  // display: flex;
  // align-items: center;
`;

export const NavBarInner = styled.div`
  // width: 1300px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  // background-color: orange;
  margin: 0 auto;
`;

export const TitleWrap = styled.div`
  margin-left: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MainTitle = styled.span`
  font-size: 26px;
`;

export const SubTitle = styled.span`
  font-size: 16px;
  margin-left: 10px;
  margin-right: 40px;
`;

export const NavSearchbar = styled.div`
  width: 420px;
  flex-shrink: 0;
`;

export const NavSearchInput = styled.input`
  width: 350px;
  height: 35px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  float: left;
`;

export const NavSearchButton = styled.button`
  width: 40px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: white;
  float: right;
  display: inline-block;
  cursor: pointer;
  transition: 0.45s;
  border: 2px solid white;

  &:hover {
    // background-color: #5fb352;
    background-color: rgba(255, 179, 0, 1);
    border-color: rgba(255, 179, 0, 1);
    color: white;
  }
`;

export const NavIconsContainer = styled.div`
  // width: 300px;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBtn = styled.div`
  margin: 0 5px;
`;

export const NavAccountSpan = styled.span`
  display: inline-block;
  background-color: rgba(255, 179, 0, 1);
  width: 80px;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  border: 2px solid rgba(255, 179, 0, 1);
  margin: 0 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.45s;
  font-weight: bold;

  &:hover {
    color: rgba(255, 179, 0, 1);
    background-color: white;
  }
`;

//ProfileCard
export const CardDiv = styled.span`
  display: flex;
  flex-direction: column;
  background-color: #c2e6ab;
  border-radius: 30px;
  width: 400px;
  height: 450px;
  justify-content: space-evenly;
  margin: 0 10px 30px 0;
  cursor: pointer;
`;

export const IdContainer = styled.span`
  display: flex;
  margin: 0 auto;
  width: 350px;
  display: flex;
  justify-content: space-evenly;
`;
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NameP = styled.p`
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 5px;
`;

export const JobP = styled.p`
  font-size: 36px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
`;

export const ProfileIntro = styled.div`
  margin-top: 10px;
  text-align: left;
`;

export const ProfileSpec = styled.div`
  margin-top: 20px;
  text-align: left;
`;

export const ProfileSkills = styled.div`
  margin-top: 20px;
  text-align: left;
  &:p {
    font-weight: bold;
  }
`;

//AdCard
export const AdContentP = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 24px;
`;
export const AdText = styled.div`
  width: max-content;
  color: #f8f4f4;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  left: 330px;
  bottom: -20px;
`;

//RecommendBar
export const RecommendBarDiv = styled.div`
  margin-top: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
export const RecommendToWho = styled.div`
  padding: 5px;
  margin-right: 6px;
  font-size: 18px;
`;

export const RecommendChip = styled.button`
  color: black;
  font-size: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  margin: 0px 6px;
  padding: 10px;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

//SearchPage

export const RecommendDiv = styled.div`
  //추천 카드는 구현을 우선순위에서 미루는 걸로 회의함
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
export const SuggestP = styled.p`
  margin-top: 6%;
  font-size: 36px;
  color: #707070;
  align-self: flex-start;
  margin-left: 20px;
`;

export const SearchResultDivParent = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 14px;
  width: 60%;
  height: 134px;
  background-color: rgba(255, 224, 130, 0.2);
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
`;

export const SearchResultDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: 75%;
  align-items: center;
  justify-content: space-in-between;
`;
export const SearchResultImg = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
`;

export const SearchResultDetail = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SearchResultIntroBox = styled.div`
  width: 60%;
  height: 90px;
  background-color: white;
  border-radius: 8px;
  margin-left: auto;
`;

export const SearchResultButton = styled.button`
  font-size: 18px;
  width: 100px;
  height: 50px;
  padding: 5px;
  background-color: #b299b0;
  border: none;
  border-radius: 7px;
  margin-right: 30px;
`;
//UpdatedFriends.jsx

export const UpdatedFriendsSection = styled.section`
  display: block;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const UpdatedFriendsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  height: 55px;
  background-color: rgba(249, 249, 249, 1);
  box-shadow: 1px 2px 10px 2px rgba(107, 104, 104, 0.3);
  border-radius: 10px;
  justify-content: center;
`;

export const UpdatedFriendsImg = styled.img`
  image-resolution: 1 / 1;
  width: 35px;
  border-radius: 50%;
  color: red;
  box-shadow: 1px 1px 3px 1px rgba(107, 104, 104, 0.67);
`;

export const UpdatedFriendsDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  left: -8px;
  top: -28px;
  box-shadow: 1px 1px 6px 1px rgba(107, 104, 104, 0.67);
`;

export const UpdatedFriendsCardDiv = styled.div`
  background-color: rgba(255, 224, 130, 0.6);
  box-shadow: 1px 2px 8px 0px rgba(107, 104, 104, 0.3);
  border-radius: 10px;
  width: 60%;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const UpdatedFriendsCardImg = styled.img`
  width: 66px;
  border-radius: 50%;
  margin: 10px 30px;
  margin-right: 40px;
  background-color: white;
`;

export const UpdatedFriendsCardName = styled.span`
  font-size: 20px;
  flex: 1;
`;

export const UpdatedFriendsCardText = styled.div`
  flex: 6;
  margin-right: 30px;
`;
export const UpdatedFriendsCardIcons = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  margin: 10px;
`;

export const UpdatedFriendsRecommendToYouDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  gap: 10px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 24px;
`;

export const UpdatedFriendsRecommendCardIdolButton = styled.div`
  font-size: 14px;
  color: black;
  background-color: #ffb555;
  border: none;
  border-radius: 5px;
  padding: 8px 14px;
  margin: 5px;
`;

export const UpdatedFriendsRecommendChips = styled.div`
  display: flex;
  justify-content: center;
`;

export const UpdatedFriendsRecommendChip = styled.button`
  font-size: 14px;
  color: black;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 20px;
  border: none;
  padding: 8px 14px;
  margin: 5px;
  cursor: pointer;
  border: 3px solid rgba(217, 217, 217, 1);
`;

export const UpdatedFriendsRecommendCardContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const UpdatedFriendsRecommendCardDivParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 155px;
  height: 173px;
  background-color: #ffeab89e;
  box-shadow: 1px 2px 8px 0px rgba(107, 104, 104, 0.2);
  border-radius: 10px;
  cursor: pointer;
`;

export const UpdatedFriendsRecommendCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 110px;
  width: inherit;
`;

export const UpdatedFriendsRecommendCardImg = styled.img`
  width: 66px;
  border-radius: 50%;
  margin: 10px;
`;
export const UpdatedFriendsRecommendCardName = styled.span`
  margin: 10px;
  font-weight: bold;
`;

export const FooterFlex = styled.div`
  margin-top: auto;
  width: 200px;
  height: 60px;
  margin-left: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const ContentDiv = styled.div`
  padding-bottom: 150px;
  position: relative;
  min-height: calc(100vh - 270px);
  // background-color: orange;
`;

export const FooterDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  // background-color: #ffe082;
  background-color: #777;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.div`
  // color: black;
  color: #e1e1e1;
  font-size: 14px;
  // margin-bottom: 4px;
  margin: 3px;
`;
