import React, { useCallback, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PostCategoryDiv,
  PostContents,
  PostDiv,
  PostTitleInput,
  ProfileDiv,
} from "../../../styledComponents";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const PostPage = () => {
  const ref = useRef();
  const params = useParams();
  const name = params.name;
  const category = params.category;

  const handleHeight = useCallback(() => {
    if (ref == null || ref.current == null) {
      return;
    }
    ref.current.style.height = "35px";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, []);

  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 작성하세요...",
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
  }, []);
  return (
    <PostDiv>
      <PostCategoryDiv>
        {category == "pl" ? "Programming Langauges" : "Framework / Library"} -{" "}
        {name}
      </PostCategoryDiv>
      <PostTitleInput placeholder="제목을 입력하세요" />

      {/* <PostContents
        ref={ref}
        onChange={handleHeight}
        placeholder="내용을 입력하세요"
      /> */}

      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </PostDiv>
  );
};

export default PostPage;
