import React from "react";
import styles from "./FAQWrapper.module.css";
import { useState } from "react";
import FAQ from "../FAQ/FAQ";

const FAQWrapper = () => {
  const [fQuestion, setQuestions] = useState([
    {
      id: 1,
      fQuestion: "Is this forum free?",
      fAnswer: "Yes, of course, not need to pay for anything.",
    },
    {
      id: 2,
      fQuestion: "Do I need an account to post a question?",
      fAnswer:
        "An account is required, you can create one in „Create account“ page. ",
    },
    {
      id: 3,
      fQuestion: "How many question can I post?",
      fAnswer:
        "The amount is not limited, however trying to span the same question will result in deletion of duplicating ones and if the offense is repeated a ban.",
    },

    {
      id: 4,
      fQuestion: "What questions are allowed to be posted?",
      fAnswer:
        "We don't specialize in any one field, so questions can be asked regardless of topic. However, we prohibit questions that are personal or result in harm to ones health.",
    },
  ]);

  return (
    <div className={styles.main}>
      <h2>Site FAQ</h2>

      <div className={styles.questionWrapper}>
        {fQuestion.map((q) => {
          return (
            <FAQ
              key={q.id}
              fQuestion={q.fQuestion}
              fAnswer={`ANSWER: ${q.fAnswer}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQWrapper;
