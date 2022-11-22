import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { memo, useState, useEffect } from "react";
import { getCookie, setCookie } from "../../../config/cookie";
import { APIURL } from "../../../config/key";
import {
  PopupBox,
  PopupDiv,
  ImageUploadBtn,
  ImageBox,
  Image,
  ImageInputDiv,
  ImageInput,
  PopupSaveBtn,
  ImageIconStyle,
  EditProfileDiv,
  EditLabel,
  EditInput,
  FormSubmitBtn,
} from "../../../styledComponents";
import PopupHeader from "./PopupHeader";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ImgPopup = ({ setPopup, name, email, id, link, image }) => {
  const [src, setSrc] = useState(image);
  const [inputs, setInputs] = useState({
    _name: name,
    _email: email,
    _link: link,
    _image: "",
  });
  const { _name, _email, _link, _image } = inputs;

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      const file = e.target.files[0];

      setInputs({
        ...inputs,
        _image: file,
      });

      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        setSrc(reader.result);
      });
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData();
    if (_name) {
      form_data.append("name", _name);
    }
    if (_email) {
      form_data.append("email", _email);
    }
    if (_link != null) {
      form_data.append("link", _link);
    }

    if (_image) {
      form_data.append("image", _image);
    }

    const headers = {
      Authorization: "token " + getCookie("token"),
      "content-type": "multipart/form-data",
    };

    axios
      .patch(`${APIURL}/account/user/${id}/`, form_data, {
        headers,
      })
      .then((res) => {
        if (res.status == 200) {
          const img = `/media/users/${_image.name}`;
          setCookie("user_img", img);
          setPopup(false);
          window.location.reload();
        }
      })
      .catch((err) => {
        alert("Github 링크 주소가 유효하지 않습니다.");
      });
  };

  return (
    <>
      <PopupDiv>
        <PopupBox>
          <PopupHeader setPopup={setPopup} text="프로필 정보 수정" />

          <ImageBox>
            {src === "null" || src === "undefined" ? (
              <FontAwesomeIcon icon={faUser} style={ImageIconStyle} />
            ) : (
              <Image src={src} />
            )}
          </ImageBox>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <ImageInputDiv>
              <ImageInput
                type="file"
                onChange={onSelectFile}
                name="_image"
                accept="image/jpeg,image/png,image/gif"
              />
            </ImageInputDiv>

            <EditProfileDiv>
              <EditLabel>이름</EditLabel>
              <EditInput
                type="text"
                name="_name"
                value={_name}
                onChange={onChange}
              />
            </EditProfileDiv>

            {/* <EditProfileDiv>
            <EditLabel>아이디</EditLabel>
            <EditInput type="text" name="_id" value={_id} onChange={onChange} />
          </EditProfileDiv> */}

            <EditProfileDiv>
              <EditLabel>이메일</EditLabel>
              <EditInput
                type="text"
                name="_email"
                value={_email}
                onChange={onChange}
              />
            </EditProfileDiv>

            <EditProfileDiv style={{ marginBottom: "50px" }}>
              <EditLabel>Github 링크</EditLabel>
              <EditInput
                type="text"
                name="_link"
                value={_link}
                onChange={onChange}
                maxLength={100}
              />
            </EditProfileDiv>
            {/* <PopupSaveBtn onClick={editInfo}>저장하기</PopupSaveBtn> */}
            <FormSubmitBtn type="submit" value="저장하기" />
          </form>
        </PopupBox>
      </PopupDiv>
    </>
  );
};

export default ImgPopup;
