import axios from "axios";
import React, { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";
import {
  TagDiv,
  Tag,
  TagXmark,
  TagAddIcon,
  TagAddInput,
} from "../../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const ProfileTag = () => {
  const { isAdmin } = useOutletContext();

  const [hashtag, setHashtag] = useState([]);
  const [clickAdd, setClickAdd] = useState(false);
  const [input, setInput] = useState("");

  const inputRef = useRef();
  const params = useParams();

  const getHashtag = async () => {
    const res = await axios.get(
      `${APIURL}/profile/hashtag/get_hashtag/${params.user_id}/`
    );

    if (res.status == 200) {
      const temp = [];
      for (let i = 0; i < res.data.length; i++) {
        temp.push(res.data[i].hashtag_name);
      }

      setHashtag(temp);
    }
  };

  const addHashtag = async () => {
    const res = await axios.post(
      `${APIURL}/profile/hashtag/`,
      {
        profile: [getCookie("user_id")],
        hashtag_name: input,
      },
      {
        headers: {
          Authorization: "token " + getCookie("token"),
        },
      }
    );

    // if (res.status == 201) {
    //   console.log("add hashtag success");
    // } else {
    //   console.log("add hashtag fail");
    // }
  };

  const deleteHashtag = async ({ hashtag_name }) => {
    const res = await axios.delete(
      `${APIURL}/profile/hashtag/${hashtag_name}/`,
      {
        headers: {
          Authorization: "token " + getCookie("token"),
        },
      }
    );

    if (res.status == 200) {
      window.location.reload();
    }
  };

  useEffect(() => {
    setClickAdd(false);
    setInput("");
    getHashtag();
  }, [params.user_id]);

  useEffect(() => {
    if (clickAdd) {
      inputRef.current.focus();
    }
  }, [clickAdd]);

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      if (input.indexOf("#") !== -1) {
        alert("해시태그 텍스트 내부에 '#'이 들어갈 수 없습니다.");
        setInput("");
      } else {
        addHashtag().then(() => {
          setInput("");
          window.location.reload();
        });
      }
    }
  };
  return (
    <>
      <TagDiv type={hashtag.length === 0 ? "init" : "else"}>
        {hashtag.map((tag, idx) => (
          <Tag key={idx}>
            #{tag}
            {isAdmin && (
              <TagXmark onClick={() => deleteHashtag({ hashtag_name: tag })}>
                <FontAwesomeIcon icon={faXmark} />
              </TagXmark>
            )}
          </Tag>
        ))}

        {clickAdd && (
          <TagAddInput
            margin={hashtag.length === 0 ? "init" : "else"}
            type="text"
            placeholder="입력 후 ENTER"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyUp={onKeyUp}
            ref={inputRef}
          />
        )}

        {isAdmin && (
          <TagAddIcon onClick={() => setClickAdd(clickAdd ? false : true)}>
            {clickAdd ? <>취소</> : <>해시태그 추가</>}
          </TagAddIcon>
        )}
      </TagDiv>
    </>
  );
};

export default ProfileTag;
