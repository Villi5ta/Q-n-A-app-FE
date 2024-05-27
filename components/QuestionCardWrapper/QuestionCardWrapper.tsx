import React from "react";
import styles from "./QuestionCardWrapper.module.css";
import { AnswerType, QuestionType } from "../../types/question";
import QuestionCard from "../QuestionCard/QuestionCard";
import Link from "next/link";

type QCardWrapperType = {
  questions: QuestionType[];
};

const QuestionCardWrapper = ({ questions }: QCardWrapperType) => {
  const sortedQuestions = questions.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className={styles.wrapper}>
      {sortedQuestions.map((question) => (
        <QuestionCard
          id={question.id}
          key={question.id}
          title={question.title}
          question={question.question}
          userName={question.userName}
          answerNumber={question.answers.length}
        />
      ))}

      <div className={styles.forumBtn}>
        <button>
          <Link href={"/add_question"}>
            Got your own question? Post it here!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default QuestionCardWrapper;
