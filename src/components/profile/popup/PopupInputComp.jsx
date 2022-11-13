import React, { memo } from "react";

import {
  PopupInputDiv,
  PopupInputText,
  PopupInput,
} from "../../../styledComponents";

const PopupInputComp = memo(({ text, name, value, onChange, placeholder }) => {
  return (
    <PopupInputDiv>
      <PopupInputText>{text}</PopupInputText>
      <PopupInput
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </PopupInputDiv>
  );
});

export default PopupInputComp;
