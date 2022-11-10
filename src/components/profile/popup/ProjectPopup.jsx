import React, { memo } from 'react';
import { 
  PopupDiv, PopupBox, PopupHead,
  PopupText, PopupXMark, PopupInputDiv,
  PopupInputText, PopupInput, PopupDateDiv, 
  PopupDateSmall, PopupDateText, PopupDateInputDiv,
  PopupDateInput, PopupTextarea, PopupSaveBtn
} from '../../../styledComponents';

import PopupHeader from './PopupHeader';
import PopupInputComp from './PopupInputComp';

const ProjectPopup = memo(({ setPopup }) => {
  return (
    <PopupDiv>

      <PopupBox>

        <PopupHeader setPopup={setPopup} text="프로젝트 추가하기" />

        <PopupInputComp text="프로젝트명" />

        <PopupInputComp text="담당" />

        <PopupInputComp text="사용한 기술 스택" />

        <PopupDateDiv>

          <PopupDateSmall>
            <PopupDateText>프로젝트 시작 일자</PopupDateText>
            <PopupDateInputDiv>
              <PopupDateInput placeholder='YEAR' />
              <PopupDateInput placeholder='MONTH' />
            </PopupDateInputDiv>
          </PopupDateSmall>
          <PopupDateSmall>
            <PopupDateText>프로젝트 종료 일자</PopupDateText>
            <PopupDateInputDiv>
              <PopupDateInput placeholder='YEAR' />
              <PopupDateInput placeholder='MONTH' />
            </PopupDateInputDiv>
          </PopupDateSmall>

        </PopupDateDiv>


        <PopupInputComp text="함께 한 동료" />

        <PopupInputDiv style={{flexGrow:'3'}}>
          <PopupInputText>상세설명</PopupInputText>
          <PopupTextarea  />
        </PopupInputDiv>

        <PopupSaveBtn>
          <div style={{marginTop: '4px'}}>
          저장하기
          </div>
        </PopupSaveBtn>

      </PopupBox>
      
    </PopupDiv>
  );
});

export default ProjectPopup;