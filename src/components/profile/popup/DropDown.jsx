import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  PopupDropBox,
  PopupDropDiv,
  PopupDropItem,
  PopupInputDiv,
  PopupInputText,
} from "../../../styledComponents";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
const DropDown = ({ setCategory }) => {
  const [down, setDown] = useState(false);
  const [text, setText] = useState("선택");

  const onDown = (e) => {
    if (e.target === e.currentTarget) {
      setDown(down ? false : true);
    }
  };

  const onClick = (e) => {
    const name = e.target.innerText;

    if (name === "프로그래밍 언어") {
      setCategory("pl");
      setText("프로그래밍 언어");
    } else if (name === "프레임워크/라이브러리") {
      setCategory("fl");
      setText("프레임워크/라이브러리");
    }

    setDown(false);
  };

  return (
    <PopupInputDiv style={{ marginBottom: "50px" }}>
      <PopupInputText>기술스택 분류</PopupInputText>

      <PopupDropDiv onClick={onDown}>
        <div>{text}</div>
        <div>
          <FontAwesomeIcon icon={down ? faAngleUp : faAngleDown} />
        </div>

        {down && (
          <PopupDropBox>
            <PopupDropItem onClick={onClick}>프로그래밍 언어</PopupDropItem>
            <PopupDropItem onClick={onClick}>
              프레임워크/라이브러리
            </PopupDropItem>
          </PopupDropBox>
        )}
      </PopupDropDiv>
    </PopupInputDiv>
  );
};

export default DropDown;
