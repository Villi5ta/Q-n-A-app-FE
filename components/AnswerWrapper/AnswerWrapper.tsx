import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AnswerType } from "../../types/question";

type AnswerWrapperProps = {
  answer: AnswerType;
};

type LikeDislikeState = {
  [key: string]: boolean;
};

const AnswerWrapper: React.FC<AnswerWrapperProps> = ({ answer }) => {
  const router = useRouter();
  const [likes, setLikes] = useState<LikeDislikeState>({});

  useEffect(() => {
    const savedLikes = JSON.parse(
      Cookies.get("likes") || "{}"
    ) as LikeDislikeState;
    setLikes(savedLikes);
  }, []);

  useEffect(() => {
    Cookies.set("likes", JSON.stringify(likes), { expires: 365 });
  }, [likes]);

  const handleLike = (text: string) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [text]: !prevLikes[text],
    }));
  };

  return (
    <div>
      <ul>
        {answer.answers.map((a: any) => (
          <li key={a.text}>
            <p>{a.text}</p>
            <p>— {a.userName}</p>
            <button
              onClick={() => handleLike(a.text)}
              style={{ color: likes[a.text] ? "blue" : "black" }}
            >
              Like
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerWrapper;
