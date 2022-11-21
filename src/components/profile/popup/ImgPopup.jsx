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
} from "../../../styledComponents";
import PopupHeader from "./PopupHeader";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ImgPopup = memo(({ setPopup, name, email, id, link }) => {
  const [src, setSrc] = useState(getCookie("user_img"));
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

      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        setSrc(reader.result);
      });
    }

    const file = e.target.files[0];
    // console.log(file);
    // setSrc(file);
    let newData = { ...inputs };
    newData["_image"] = file;
    setInputs(newData);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const editInfo = async () => {
    // const body = {
    //   email: _email,
    //   name: _name,
    //   image: src,
    //   link: _link,
    // };
    const body = {
      name: _name,
      email: _email,
      link: _link,
      image: _image,
    };
    console.log(body);
    const res = await axios.patch(`${APIURL}/account/user/${id}/`, body);

    if (res.status == 200) {
      console.log(res);
      setPopup(false);
      window.location.reload();
    } else {
      console.log("edit info fail");
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const file = e.target[1].files[0];

    const form = new FormData();
    form.append("files", file);
    form.append("enctype", "multipart/form-data");
    console.log(form);

    const url = `${APIURL}/`;
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

          <ImageInputDiv>
            <ImageInput
              type="file"
              onChange={onSelectFile}
              name="image_url"
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
            />
          </EditProfileDiv>

          <PopupSaveBtn onClick={editInfo}>저장하기</PopupSaveBtn>
        </PopupBox>
      </PopupDiv>
    </>
  );
});

export default ImgPopup;
