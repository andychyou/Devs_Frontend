import React, { useCallback, useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PostBtn,
  PostBtnDiv,
  PostCategoryDiv,
  PostContents,
  PostDiv,
  PostTitleInput,
  ProfileDiv,
} from "../../../styledComponents";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";
import axios from "axios";
import { APIURL } from "../../../config/key";

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
  const id = params.id;
  const user = params.user_id;

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;

  const onChange = useCallback(
    (e) => {
      if (ref == null || ref.current == null) {
        return;
      }
      ref.current.style.height = "35px";
      ref.current.style.height = ref.current.scrollHeight + "px";

      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [title, content]
  );

  const onPost = async () => {
    const res = await axios.post(`${APIURL}/profile/skilldetail/`, {
      skill_name: id,
      skill_detail: title,
      content,
    });

    if (res.status == 201) {
      alert("작성되었습니다");
      window.location.replace(`/profile/${user}/${category}/${name}/${id}`);
    }
  };

  //   const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  //   const quillInstance = useRef(null); // Quill 인스턴스를 설정
  //   useEffect(() => {
  //     quillInstance.current = new Quill(quillElement.current, {
  //       theme: "bubble",
  //       placeholder: "내용을 작성하세요...",
  //       modules: {
  //         // 더 많은 옵션
  //         // https://quilljs.com/docs/modules/toolbar/ 참고
  //         toolbar: [
  //           [{ header: "1" }, { header: "2" }],
  //           ["bold", "italic", "underline", "strike"],
  //           [{ list: "ordered" }, { list: "bullet" }],
  //           ["blockquote", "code-block", "link", "image"],
  //         ],
  //       },
  //     });
  //   }, []);
  return (
    <PostDiv>
      <PostCategoryDiv>
        {category == "pl" ? "Programming Langauges" : "Framework / Library"} -{" "}
        {name}
      </PostCategoryDiv>
      <PostTitleInput
        placeholder="제목을 입력하세요"
        onChange={onChange}
        name="title"
        value={title}
      />

      <PostContents
        name="content"
        value={content}
        ref={ref}
        onChange={onChange}
        placeholder="공부한 내용을 기록해보세요..."
      />

      <PostBtnDiv>
        <PostBtn onClick={onPost}>저장</PostBtn>
      </PostBtnDiv>

      {/* <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper> */}
    </PostDiv>
  );
};

export default PostPage;
