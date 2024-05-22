import React from "react";
import styles from "./QuestionCardWrapper.module.css";
import { QuestionType } from "../../types/question";
import QuestionCard from "../QuestionCard/QuestionCard";

type QCardWrapperType = {
  questions: QuestionType[];
};

const QuestionCardWrapper = ({ questions }: QCardWrapperType) => {
  return (
    <div className={styles.wrapper}>
      {questions.map((question) => (
        <QuestionCard
          id={question.id}
          key={question.id}
          title={question.title}
          question={question.question}
        />
      ))}
    </div>
  );
};

export default QuestionCardWrapper;
