import styled, { css } from "styled-components";

// landing page
export const LandingDiv = styled.div`
  // width: 100%;
  min-width: 100vw;
  height: max-content;
  min-height: 100vh;
  padding-bottom: 100px;
  background-color: #ffe082;
  position: absolute;
  z-index: -5;
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
  height: 100px;
`;
export const DevsText = styled.div`
  // background-color: aqua;
  width: 1700px;
  //width: 100%;
  //line-height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-left: 100px;
  font-weight: 500;
  font-size: 28px;
  //font-size: 3vh;
  cursor: pointer;
`;

export const LandingContent = styled.div`
  // width: max-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  // background-color: aqua;
`;

export const LandingInfoDiv = styled.div`
  margin-top: 95px;
  margin-right: 150px;
  //margin-top: 13vh;
  //  background-color: orange;
  //width: 40vw;
  width: 610px;
  //width: 50%;
`;

export const LandingInfoBig = styled.div`
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 40px;
  //font-size: 3.8vh;
  //margin-bottom: 5vh;
`;

export const LandingInfoSmall = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 35px;
  //line-height: 3.5vh;
  //font-size: 2.2vh;
`;
// background-image: url(./landing-img.png);
export const LandingImg = styled.img`
  display: inline-block;
  //width: 751px;
  //height: 599px;
  width: 100%;
  height: calc(100% * 0.7976);
  margin-top: 30px;
  //margin-top: 3vh;
  object-fit: contain;
`;

export const RegisterDiv = styled.div`
  background-color: #fff8e1;
  margin-left: 150px;
  width: 460px;
  height: 690px;
  //width: 30vw;
  //height: calc(30vw * 1.5);
  border-radius: 8px;
  //border-radius: 0.8vh;
  position: relative;
`;

export const RegisterText = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 100px;
  //line-height: 12vh;
  //font-size: 3vh;
  width: 100%;
  text-align: center;
`;

export const RegisterUl = styled.ul`
  width: 80%;
  margin: 0 auto;
`;

export const RegisterLi = styled.li`
  // margin-bottom: 30px;
  padding-bottom: 25px;
  // background-color: orange;
  position: relative;
  //margin-bottom: 3vh;
`;

export const RegisterInputText = styled.div`
  font-weight: 400;
  font-size: 18px;
  //font-size: 2vh;
`;

export const RegisterInput = styled.input`
  //display: inline-block;
  border: none;
  border-radius: 7px;
  //border-radius: 0.7vh;
  width: 100%;
  padding: 0 10px;
  height: 35px;
  margin: 5px 0 0;
  //margin-top: 1vh;
  //height: 4vh;
`;
export const WrongInputText = styled.div`
  font-size: 12px;
  color: red;
  position: absolute;
  right: 0;
  top: 4px;
  //bottom: 0;
`;

export const RegisterBtn = styled.div`
  background-color: #ffd249;
  width: 80%;
  line-height: 35px;
  //line-height: 5vh;
  font-weight: 700;
  font-size: 18px;
  //font-size: 2vh;
  text-align: center;
  border-radius: 50px;
  //border-radius: 5vh;
  cursor: pointer;
  margin: 20px auto 0;
  //margin: 4.5vh auto 0;
`;

export const AlreadyRegister = styled.div`
  width: 150px;
  line-height: 30px;
  //width: 15vh;
  //line-height: 3vh;
  text-align: center;
  color: #0d4ae9;
  position: absolute;
  left: calc(100% / 2);
  bottom: 30px;
  //bottom: 4vh;
  //margin-left: -7.5vh;
  //font-size: 1.6vh;
  margin-left: -75px;
  cursor: pointer;
`;

export const LandingFooter = styled.div`
  background-color: #ffb300;
  width: 100%;
  height: 240px;
  //height: 22vh;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -3;
`;
// login
export const LoginDiv = styled.div`
  background-color: #fff8e1;
  margin-top: 10vh;
  width: 652px;
  height: 541px;
  border-radius: 8px;
  //width: 37vw;
  //height: 33vw;
  //border-radius: 0.8vh;
  position: relative;
  z-index: 10;
`;
export const LoginImgDiv = styled.div`
  display: flex;
`;
export const LoginImg1 = styled.img`
  // background-color: aqua;
  display: inline-block;
  //width: 40vw;
  width: 700px;
  height: calc(700px * 0.89);
  object-fit: contain;
  position: absolute;
  top: 93px;
  //top: 9vh;
  left: 0;
`;

export const LoginImg2 = styled.img`
  //background-color: aqua;
  display: inline-block;
  width: 700px;
  height: calc(700px * 0.79);
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
  width: max-content;
  margin: 150px auto 0;
`;

export const LoginBtn = styled.div`
  cursor: pointer;
  margin: 0 30px;
  //font-size: 1.8vh;
`;

// Profile Page
export const ProfileDiv = styled.div`
  background-color: rgba(255, 224, 130, 0.3);
  // width: 963px;
  width: calc(923px + 100px);
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
  /* background-color: orange; */
  position: relative;
`;

export const ProfileImgDiv = styled.div`
  width: 150px;
  height: max-content;
  position: relative;

  // background-color: orange;
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
export const ProfileFunctDiv = styled.div`
  // background-color: orange;
  width: calc(100% - 150px);
  display: flex;
  flex-wrap: wrap;
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
`;

export const ProfileDesc = styled.p`
  line-height: 22px;
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
`;
export const FanIdolNum = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
export const FollowBtn = styled.div`
  width: 130px;
  line-height: 60px;
  border-radius: 7px;
  background-color: #b299b0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-left: 30px;
  cursor: pointer;
`;
// ----------
export const TagDiv = styled.div`
  // background-color: orange;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  width: max-content;
  height: max-content;
  margin-left: 20px;
  margin-top: 20px;
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
  border-radius: 20px;
  font-size: 12px;
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
  width: 40px;
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
  //width: calc(923px / 4 - 30px);
  width: calc(883px / 4 - 30px);
  line-height: 33px;
  text-align: center;
  margin: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
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
`;
export const CareerBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
export const Career = styled.div`
  background-color: rgba(215, 203, 161, 0.65);
  width: calc(923px / 3 - 45px);
  /* margin: 10px; */
  line-height: 35px;
  border-radius: 5px;
  padding: 0 10px;
`;

export const CareerDescDiv = styled.div`
  max-width: 100%;
  height: max-content;
  display: flex;
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
  min-height: 35px;
  /* height: max-content; */
  width: calc(923px - 100px);
  border-radius: 5px;
  padding: 0 10px;
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
  border-radius: 5px;
`;

//Profile3

export const ProfileContentSection = styled.section`
  width: 1000px;
  background-color: rgba(255, 224, 130, 0.3);
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const ProfileSkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ProfileSkillDiv = styled.div`
  width: 900px;
`;

export const ProfileSkillSpecificDiv = styled.div`
  display: flex;
  background-color: white;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: flex-start;
  align-items: center;
`;

export const ProfileSkillName = styled.p`
  justify-self: start;
  font-weight: bold;
`;

export const ProfileSkillEditBtn = styled.button`
  display: block;
  background-color: rgb(132, 22, 12);
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
  // height: 759px;
  background-color: #fcf4de;
  padding: 20px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  position: relative;
`;

export const PopupHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
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
  margin-bottom: 30px;
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
`;

export const PopupTextarea = styled.textarea`
  width: 670px;
  height: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

export const PopupSaveBtn = styled.div`
  background-color: #ffb300;
  font-weight: bold;
  font-size: 18px;
  width: 150px;
  color: white;
  line-height: 36px;
  text-align: center;
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

//팬, 아이돌 팝업

export const CardUnit = styled.section`
  display: flex;
  align-items: center;
  background-color: #ede4b4;
  border-radius: 20px;
  width: 600px;
  height: 180px;
`;

export const CardImgNameBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;
export const CardImg = styled.img`
  width: 66px;
  height: 66px;
  border: none;
  border-radius: 50%;
`;

export const CardUserName = styled.div`
  font-size: 26px;
  font-weight: bold;
`;

export const CardUserDesc = styled.div`
  flex: 2;
  font-size: 24px;
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
  display: flex;
  align-items: center;
`;

export const TitleWrap = styled.div`
  margin-left: 10px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
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
  &:hover {
    background-color: skyblue;
    color: blue;
  }
`;

export const NavIconsContainer = styled.div`
  width: 200px;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
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
  font-size: 36px;
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

export const SearchResultDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1000px;
  height: 134px;
  background-color: rgba(255, 224, 130, 0.2);
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
`;
export const SearchResultImg = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
`;

export const SearchResultDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SearchResultIntroBox = styled.div`
  width: 400px;
  height: 100px;
  background-color: white;
  border-radius: 8px;
`;

export const SearchResultButton = styled.button`
  font-size: 24px;
  width: 150px;
  height: 57px;
  background-color: #b299b0;
  border: none;
  border-radius: 7px;
`;
//UpdatedFriends.jsx

export const UpdatedFriendsSection = styled.section`
  display: block;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const UpdatedFriendsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  width: inherit;
  height: 55px;
  background-color: rgba(249, 249, 249, 1);
  box-shadow: 2px 2px 10px 2px rgba(107, 104, 104, 0.67);
  border-radius: 10px;
  justify-content: center;
`;

export const UpdatedFriendsImg = styled.img`
  image-resolution: 1 / 1;
  width: 35px;
  border-radius: 50%;
  color: red;
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
`;

export const UpdatedFriendsCardDiv = styled.div`
  background-color: rgba(255, 224, 130, 0.6);
  border-radius: 10px;
  width: 80vw;
  cursor: pointer;
`;

export const UpdatedFriendsCardImg = styled.img`
  width: 66px;
  border-radius: 50%;
  margin: 10px 30px;
`;

export const UpdatedFriendsCardName = styled.span`
  font-size: 20px;
  flex: 1;
`;

export const UpdatedFriendsCardText = styled.div`
  flex: 8;
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
  width: 1000px;
  margin-bottom: 20px;
  margin-left: 200px;
`;

export const UpdatedFriendsRecommendCardIdolButton = styled.button`
  font-size: 14px;
  color: black;
  background-color: rgba(178, 153, 176, 1);
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
`;

export const UpdatedFriendsRecommendCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const UpdatedFriendsRecommendCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 155px;
  height: 173px;
  background-color: rgba(255, 153, 0, 0.6);
  border-radius: 10px;
  cursor: pointer;
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
