import React from "react";
import { useRouter } from "next/router";
import { QuestionType } from "../../types/question";
import cookies from "js-cookie";
import axios from "axios";
import Button from "../Button/Button";
import styles from "./QuestionWrapper.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

type QuestionWrapperProps = {
  question: QuestionType;
};

const QuestionWrapper = ({ question }: QuestionWrapperProps) => {
  const router = useRouter();
  const [displayWarning, setDisplayWarning] = useState(false);

  const deleteQuestion = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.delete(
        `${process.env.SERVER_URL}/question/delete/${router.query.id}`,
        {
          headers,
        }
      );

      if (response.status === 200) {
        router.push("/questions");
      }
    } catch (err) {
      alert("Error in deleting question");
      console.log(err);
    }
  };

  return (
    <main className={styles.questionWrapper}>
      <div className={styles.questionContentWrapper}>
        <div className={styles.questionTitle}>
          <h3>{question.title}</h3>
        </div>

        <div className={styles.questionContent}>
          <p className={styles.questionPosterName}>
            OP name: {question.userName}
          </p>
          <p className={styles.question}>Question: {question.question}</p>
        </div>

        <div className={styles.questionDeleteBtn}>
          <Button
            onClicking={() => setDisplayWarning(true)}
            isLoading={false}
            type="Warning"
            title="Delete question"
          />
        </div>
      </div>
      {displayWarning && (
        <Modal
          message="Do you really wish to delete this question?"
          onConfirm={deleteQuestion}
          onCancel={() => setDisplayWarning(false)}
        />
      )}
    </main>
  );
};

export default QuestionWrapper;
