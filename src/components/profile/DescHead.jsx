import React from 'react';
import { useEffect } from 'react';
import {
  DescHeadDiv, DescHeadText, 
  DescEditBtn,
  TwoButtons
} from '../../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const DescHead = ({ text, setPopup }) => {

  const onClick = () => {
    setPopup(true);
  }

  return (
    <>
      <DescHeadDiv>

        <DescHeadText>{ text }</DescHeadText>

        <DescEditBtn onClick={onClick}>
          <FontAwesomeIcon icon={faPen}/>
        </DescEditBtn>

      </DescHeadDiv>

      {/* <DescHeadDiv>

        <DescHeadText>{ text }</DescHeadText>
        {
          text === "기술스택/Skill Set" && (
            <TwoButtons>
              <span id = 'plus-sign' class="material-symbols-outlined">
                add_box
              </span>
              <FontAwesomeIcon icon={faPen}/>
              
            </TwoButtons>
          )

        }

        <DescEditBtn onClick={onClick}>
          <FontAwesomeIcon icon={faPen}/>
        </DescEditBtn>

      </DescHeadDiv> */}
    </>
  );
};

export default React.memo(DescHead);