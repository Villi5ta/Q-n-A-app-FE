import React from "react";
import { useRouter } from "next/router";
import { AnswerType } from "../../types/question";

type AnswerWrapperProps = {
  answer: AnswerType;
};

const AnswerWrapper = ({ answer }: AnswerWrapperProps) => {
  const router = useRouter();
  console.log("answer", answer);
  return (
    <div>
      <ul>
        {answer.answers.map((a) => (
          <li key={a.userId}>
            <p>{a.text}</p>
            <p>— {a.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerWrapper;
