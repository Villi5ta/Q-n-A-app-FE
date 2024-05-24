import React from "react";
import styles from "./QuestionCardWrapper.module.css";
import { AnswerType, QuestionType } from "../../types/question";
import QuestionCard from "../QuestionCard/QuestionCard";

type QCardWrapperType = {
  questions: QuestionType[];
};

const QuestionCardWrapper = ({ questions }: QCardWrapperType) => {
  console.log(questions);
  return (
    <div className={styles.wrapper}>
      {questions.map((question) => (
        <QuestionCard
          id={question.id}
          key={question.id}
          title={question.title}
          question={question.question}
          userName={question.userName}
          answerNumber={question.answers.length}
        />
      ))}
    </div>
  );
};

export default QuestionCardWrapper;
