import React, { useState, useEffect } from "react";
import { myAxios } from "../../../config/axios";
import {
  PopupBox,
  PopupDiv,
  PopupInputWrap,
  PopupSaveBtn,
  PopupWrongInput,
  WrongInputText,
} from "../../../styledComponents";
import PopupHeader from "./PopupHeader";
import PopupInputComp from "./PopupInputComp";

const PwdPopup = ({ setPopup }) => {
  const [isReset, setIsReset] = useState(true);
  // 이메일 유효성 검사
  const [isRightEmail, setIsRightEmail] = useState(true);
  // 비밀번호 8자 미만일 시 true -> 비밀번호 재입력칸 비활성화
  const [isPwdRight, setIsPwdRight] = useState(false);
  // 비밀번호 재입력 일치하지 않았을 때
  const [isPwdDiff, setIsPwdDiff] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    token: "",
    password: "",
    pwdcheck: "",
  });
  const { email, token, password, pwdcheck } = inputs;

  // 이메일 유효성 검사
  useEffect(() => {
    if (!email) {
      setIsRightEmail(true);
      return;
    }

    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴

    if (regExp.test(email)) {
      setIsRightEmail(true);
    } else {
      setIsRightEmail(false);
    }
  }, [email]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    if (!password) {
      setIsPwdRight(true);
      return;
    }

    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    // 형식에 맞는 경우 true 리턴

    if (regExp.test(password)) {
      setIsPwdRight(true);
    } else {
      setIsPwdRight(false);
    }
  }, [password]);

  // 비밀번호 재입력 유효성 검사
  useEffect(() => {
    if (pwdcheck === "") {
      setIsPwdDiff(false);
      return;
    }

    if (pwdcheck !== password) {
      setIsPwdDiff(true);
    } else {
      setIsPwdDiff(false);
    }
  }, [pwdcheck]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = async () => {
    const res = await myAxios.post("/account/password_reset/", {
      email,
    });

    if (res.status == 200) {
      alert("이메일로 토큰이 발송되었습니다.");
      setIsReset(false);
    }
  };

  const onPwdChange = async () => {
    const res = await myAxios.post("/account/password_reset/confirm/", {
      token,
      password,
    });

    if (res.status == 200) {
      alert("비밀번호가 성공적으로 변경되었습니다!");
      setPopup(false);
      window.location.reload();
    }
  };

  const sendReset = () => {
    if (!isRightEmail) {
      alert("올바른 이메일 표기법을 작성해주세요");
      return;
    }

    onReset().catch(() => {
      alert("이메일 오류입니다. 회원가입 시 입력한 이메일을 입력해주세요.");
    });
  };

  const sendChange = () => {
    if (!token) {
      alert("토큰을 입력해주세요!");
      return;
    }
    if (password != pwdcheck) {
      alert("비밀번호 불일치 입니다.");
      return;
    }

    onPwdChange().catch((err) => {
      alert("토큰 값이 정확하지 않습니다.");
    });
  };
  return (
    <>
      <PopupDiv>
        <PopupBox style={{ paddingBottom: "80px" }}>
          <PopupHeader setPopup={setPopup} text="비밀번호 변경" />

          {isReset ? (
            <>
              <PopupInputWrap>
                <PopupInputComp
                  onChange={onChange}
                  name="email"
                  value={email}
                  text="이메일 주소"
                  placeholder="회원가입시 입력한 이메일 주소를 입력하면, 토큰이 발송됩니다."
                />
                {!isRightEmail && (
                  <PopupWrongInput>
                    올바른 이메일 표현식이 아닙니다.
                  </PopupWrongInput>
                )}
              </PopupInputWrap>

              <PopupSaveBtn onClick={sendReset}>토큰 발송하기</PopupSaveBtn>
            </>
          ) : (
            <>
              <PopupInputComp
                onChange={onChange}
                name="token"
                value={token}
                text="토큰 입력"
                placeholder="이메일로 발송된 토큰을 입력해주세요.."
              />

              <PopupInputWrap>
                {!isPwdRight && (
                  <PopupWrongInput>
                    영문, 숫자 조합 8~16자를 입력해주세요.
                  </PopupWrongInput>
                )}
                <PopupInputComp
                  onChange={onChange}
                  name="password"
                  value={password}
                  text="비밀번호 입력"
                  placeholder="변경할 비밀번호를 입력해주세요.."
                  pwd={true}
                />
              </PopupInputWrap>
              <PopupInputWrap>
                {isPwdRight && isPwdDiff && (
                  <PopupWrongInput>
                    비밀번호가 일치하지 않습니다.
                  </PopupWrongInput>
                )}
                <PopupInputComp
                  onChange={onChange}
                  name="pwdcheck"
                  value={pwdcheck}
                  text="비밀번호 확인"
                  placeholder="변경할 비밀번호를 입력해주세요.."
                  pwd={true}
                  disable={isPwdRight && password ? false : true}
                />
              </PopupInputWrap>

              <PopupSaveBtn onClick={sendChange}>비밀번호 변경</PopupSaveBtn>
            </>
          )}
        </PopupBox>
      </PopupDiv>
    </>
  );
};

export default PwdPopup;
