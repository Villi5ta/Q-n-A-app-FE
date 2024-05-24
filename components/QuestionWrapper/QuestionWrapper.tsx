import React from "react";
import { useRouter } from "next/router";
import { QuestionType } from "../../types/question";

type QuestionWrapperProps = {
  question: QuestionType;
};

const QuestionWrapper = ({ question }: QuestionWrapperProps) => {
  const router = useRouter();
  return (
    <main>
      <h3>{question.title}</h3>
      <p>Asker: {question.userName}</p>
      <p>Question: {question.question}</p>
    </main>
  );
};

export default QuestionWrapper;
