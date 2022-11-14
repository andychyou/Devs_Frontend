import React from "react";
import { useEffect } from "react";
import {
  DescHeadDiv,
  DescHeadText,
  DescEditBtn,
  TwoButtons,
} from "../../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router-dom";

const DescHead = ({ text, setPopup }) => {
  const { isAdmin } = useOutletContext();

  const onClick = () => {
    setPopup(true);
  };

  return (
    <>
      <DescHeadDiv>
        <DescHeadText>{text}</DescHeadText>

        {isAdmin && (
          <DescEditBtn onClick={onClick}>
            <FontAwesomeIcon icon={faPen} />
          </DescEditBtn>
        )}
      </DescHeadDiv>
    </>
  );
};

export default React.memo(DescHead);
