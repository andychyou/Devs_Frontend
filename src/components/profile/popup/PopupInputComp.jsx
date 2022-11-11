import React, { memo } from "react";

import {
  PopupInputDiv,
  PopupInputText,
  PopupInput,
} from "../../../styledComponents";

const PopupInputComp = memo(({ text, name, value, onChange }) => {
  return (
    <PopupInputDiv>
      <PopupInputText>{text}</PopupInputText>
      <PopupInput type="text" name={name} value={value} onChange={onChange} />
    </PopupInputDiv>
  );
});

export default PopupInputComp;
