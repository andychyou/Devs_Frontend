import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { getCookie } from "../../../config/cookie";
import { APIURL } from "../../../config/key";
import {
  PostBtnDiv,
  PostCategoryDiv,
  PostDetailContents,
  PostDiv,
  PostTitle,
  PostBtn,
  PostTitleInput,
  PostContents,
} from "../../../styledComponents";

const PostDetail = () => {
  const { isAdmin } = useOutletContext();
  const params = useParams();
  const category = params.category;
  const name = params.name;
  const id = params.id;
  const detail_id = params.detail_id;

  //   id(=디테일pk), skill_name, content, created_at,
  //   updated_at, skill_detail
  const [detail, setDetail] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const { skill_detail, content } = detail;
  const ref = useRef();

  const getDetail = async () => {
    const res = await axios.get(
      `${APIURL}/profile/skilldetail/${id}/${detail_id}/`
    );
    setDetail(res.data[0]);
  };

  const deleteDetail = async () => {
    const res = await axios.delete(
      `${APIURL}/profile/skilldetail/${id}/${detail_id}/`,
      {
        headers: {
          Authorization: "token " + getCookie("token"),
        },
      }
    );

    if (res.status == 204) {
      alert("삭제되었습니다.");
      window.location.replace(
        `/profile/${params.user_id}/${category}/${name}/${id}`
      );
    }
  };

  const patchDetail = async () => {
    const res = await axios.patch(
      `${APIURL}/profile/skilldetail/${id}/${detail_id}/`,
      {
        skill_detail,
        content,
      },
      {
        headers: {
          Authorization: "token " + getCookie("token"),
        },
      }
    );

    if (res.status == 200) {
      alert("수정되었습니다");
      window.location.reload();
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  const onChange = (e) => {
    if (ref == null || ref.current == null) {
      return;
    }
    ref.current.style.height = "35px";
    ref.current.style.height = ref.current.scrollHeight + "px";

    const { name, value } = e.target;

    setDetail({
      ...detail,
      [name]: value,
    });
  };

  return (
    <>
      {detail && (
        <>
          {isEdit ? (
            <PostDiv>
              <PostCategoryDiv>
                {category == "pl"
                  ? "Programming Langauges"
                  : "Framework / Library"}{" "}
                - {name}
              </PostCategoryDiv>

              <PostTitleInput
                placeholder="제목을 입력하세요"
                onChange={onChange}
                name="skill_detail"
                value={skill_detail}
              />

              <PostContents
                name="content"
                value={content}
                ref={ref}
                onChange={onChange}
                placeholder="공부한 내용을 기록해보세요..."
              />

              <PostBtnDiv>
                <PostBtn onClick={patchDetail}>저장</PostBtn>
                <PostBtn type="delete" onClick={() => setIsEdit(false)}>
                  취소
                </PostBtn>
              </PostBtnDiv>
            </PostDiv>
          ) : (
            <PostDiv>
              <PostCategoryDiv>
                {category == "pl"
                  ? "Programming Langauges"
                  : "Framework / Library"}{" "}
                - {name}
              </PostCategoryDiv>

              <PostTitle>{detail.skill_detail}</PostTitle>

              <PostDetailContents>{detail.content}</PostDetailContents>

              {isAdmin && (
                <PostBtnDiv>
                  <PostBtn onClick={() => setIsEdit(true)}>수정</PostBtn>
                  <PostBtn type="delete" onClick={deleteDetail}>
                    삭제
                  </PostBtn>
                </PostBtnDiv>
              )}
            </PostDiv>
          )}
        </>
      )}
    </>
  );
};

export default PostDetail;
