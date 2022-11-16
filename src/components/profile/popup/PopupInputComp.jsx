import React, { memo } from "react";

import {
  PopupInputDiv,
  PopupInputText,
  PopupInput,
} from "../../../styledComponents";

const PopupInputComp = memo(
  ({ text, name, value, onChange, placeholder, disable }) => {
    return (
      <PopupInputDiv>
        <PopupInputText>{text}</PopupInputText>
        <PopupInput
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disable ? disable : false}
        />
      </PopupInputDiv>
    );
  }
);

export default PopupInputComp;
