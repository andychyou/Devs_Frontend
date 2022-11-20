import React, { useState, useRef, useEffect } from "react";
import {
  LoginDiv,
  LoginBtn,
  LoginBtnDiv,
  RegisterText,
  RegisterUl,
  RegisterLi,
  RegisterInput,
  RegisterInputText,
  RegisterBtn,
} from "../../styledComponents";
import axios from "axios";
import { APIURL } from "../../config/key";
import { getCookie, setCookie } from "../../config/cookie";
import { useNavigate } from "react-router-dom";
import PwdPopup from "../profile/popup/PwdPopup";

const LoginInput = () => {
  const [input, setInput] = useState({
    id: "",
    pwd: "",
  });
  const [pwdReset, setPwdReset] = useState(false);
  const { id, pwd } = input;
  const idRef = useRef();
  const pwdRef = useRef();

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };
  const onKeyUp = (e) => {
    const { name } = e.target;

    if (e.key === "Enter") {
      if (name === "id") {
        pwdRef.current.focus();
      } else {
        onLogin();
      }
    }
  };

  const navigate = useNavigate();

  //   **/account/login/**

  // - POST: body={id, password}
  // → 성공: status=200, data={id}
  // → 실패: status=400
  const sendRequest = async () => {
    const res = await axios.post(`${APIURL}/account/login/`, {
      id: id,
      password: pwd,
    });

    if (res.status == 200) {
      setCookie("user_id", res.data.id);
      setCookie("user_img", res.data.img);
      setCookie("token", res.data.token, { httpOnly: true, secure: true });
      navigate("/main");
    } else {
      alert("로그인 실패! 아이디 또는 비밀번호를 확인해주세요.");
    }
  };

  const onLogin = () => {
    if (!id || !pwd) {
      alert("모든 정보를 입력해주세요!");
    } else {
      sendRequest().catch((err) => {
        alert("로그인 실패! 아이디 또는 비밀번호를 확인해주세요.");
      });
    }
  };
  const goRegister = () => {
    navigate("/");
  };

  return (
    <>
      {pwdReset && <PwdPopup setPopup={setPwdReset} />}
      <LoginDiv>
        <RegisterText>당신의 스토리를 알려주세요!</RegisterText>

        <RegisterUl>
          <RegisterLi>
            <RegisterInputText>아이디</RegisterInputText>
            <RegisterInput
              type="text"
              name="id"
              value={id}
              ref={idRef}
              onChange={onChange}
              onKeyUp={onKeyUp}
            />
          </RegisterLi>
          <RegisterLi>
            <RegisterInputText>비밀번호</RegisterInputText>
            <RegisterInput
              type="password"
              name="pwd"
              value={pwd}
              ref={pwdRef}
              onChange={onChange}
              onKeyUp={onKeyUp}
            />
          </RegisterLi>
        </RegisterUl>

        <RegisterBtn onClick={onLogin}>로그인</RegisterBtn>

        <LoginBtnDiv>
          {/* <LoginBtn>아이디 찾기</LoginBtn>
          <LoginBtn>비밀번호 찾기</LoginBtn> */}
          <LoginBtn onClick={goRegister}>회원가입</LoginBtn>
          <LoginBtn onClick={() => setPwdReset(true)}>비밀번호 변경</LoginBtn>
        </LoginBtnDiv>
      </LoginDiv>
    </>
  );
};

export default React.memo(LoginInput);
