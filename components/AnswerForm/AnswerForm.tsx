import React, { useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import styles from "./AnswerForm.module.css";

const AnswerForm = () => {
  const router = useRouter();

  const [text, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const postAnswer = async () => {
    const headers = {
      authorization: cookies.get("jwt_token"),
    };

    if (text.length < 5) {
      setError(true);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/question/${router.query.id}/answer`,
        { text },
        { headers }
      );

      if (response.status === 201) {
        window.location.reload();
      }
    } catch (err) {
      console.log(text);
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.answerInputWrapper}>
        <textarea
          className={styles.answerInput}
          value={text}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.answerInputBtn}>
        <Button isLoading={false} onClicking={postAnswer} title="Post answer" />
      </div>
      {error && (
        <div className={styles.error}>Answer must have more than 5 symbols</div>
      )}
    </div>
  );
};

export default AnswerForm;
