import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "js-cookie";

const QuestionForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");

  const postQuestion = async () => {
    const questionData = {
      title: title,
      question: question,
    };

    if (!title || !question) {
      console.log("fill all fields");
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
        console.log("GOOD");
        router.push("/questions");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
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
      <Button
        onClicking={postQuestion}
        isLoading={false}
        title="Post question"
      />
    </div>
  );
};

export default QuestionForm;
