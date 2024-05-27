import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AnswerType } from "../../types/question";
import styles from "./AnswerWrapper.module.css";
import Button from "../Button/Button";

type AnswerWrapperProps = {
  answer: AnswerType;
};

type LikeDislikeState = {
  [key: string]: boolean;
};

const AnswerWrapper: React.FC<AnswerWrapperProps> = ({ answer }) => {
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
    <div className={styles.main}>
      <ul>
        {answer.answers.map((a: any) => (
          <li key={a.text}>
            <div>
              <p className={styles.answer}>{a.text}</p>
            </div>

            <div className={styles.answerFooter}>
              <p className={styles.user}>- {a.userName} </p>
              <Button
                isLoading={false}
                title="Mark as useful"
                onClicking={() => handleLike(a.text)}
                type={likes[a.text] ? "Like" : "Regular"}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerWrapper;
