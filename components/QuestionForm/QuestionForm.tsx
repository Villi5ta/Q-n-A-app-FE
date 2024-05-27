import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "js-cookie";
import styles from "./QuestionForm.module.css";

const QuestionForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [error, setError] = useState(false);

  const postQuestion = async () => {
    const questionData = {
      title: title,
      question: question,
    };

    if (!title || !question) {
      setError(true);
      return;
    }

    const headers = {
      authorization: cookies.get("jwt_token"),
    };

    if (headers.authorization === undefined) {
      alert("you must be logged in");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/question/`,
        questionData,
        { headers }
      );

      if (response.status === 200) {
        router.push("/questions");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.main}>
      <h3>Take the first step towards the answer</h3>
      <div className={styles.questionInput}>
        <input
          placeholder="Enter question title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className={styles.inputBtn}>
        <Button
          onClicking={postQuestion}
          isLoading={false}
          title="Post question"
        />
      </div>
      {error && (
        <div className={styles.error}>
          Please make sure all question input fields are populated.
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
