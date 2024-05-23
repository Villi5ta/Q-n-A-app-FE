import React from "react";
import styles from "./QuestionCard.module.css";
import Link from "next/link";

type QCardProps = {
  id: string;
  title: string;
  question: string;
};

const QuestionCard = ({ id, title, question }: QCardProps) => {
  return (
    <Link href={`/question/${id}`}>
      <div className={styles.questionCard}>
        <div className={styles.questionTitle}>
          <h4>{title}</h4>
        </div>
        <div className={styles.questionDescription}>
          <p>{question}</p>
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
