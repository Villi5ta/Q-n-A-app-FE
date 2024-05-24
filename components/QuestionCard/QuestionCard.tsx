import React from "react";
import styles from "./QuestionCard.module.css";
import Link from "next/link";
import { AnswerType } from "../../types/question";

type QCardProps = {
  id: string;
  title: string;
  question: string;
  userName: string;
  answerNumber?: any;
};

const QuestionCard = ({
  id,
  title,
  question,
  answerNumber,
  userName,
}: QCardProps) => {
  console.log(userName);

  return (
    <Link href={`/question/${id}`}>
      <div className={styles.questionCard}>
        <div className={styles.questionTitle}>
          <h4>{title}</h4>
        </div>
        <div className={styles.questionDescription}>
          <p>{question}</p>
          <p>Asked by: {userName}</p>
        </div>
        {answerNumber}
      </div>
    </Link>
  );
};

export default QuestionCard;
