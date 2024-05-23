import React, { useEffect, useState } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import axios from "axios";
import QuestionWrapper from "../../components/QuestionWrapper/QuestionWrapper";
import AnswerForm from "../../components/AnswerForm/AnswerForm";
import AnswerWrapper from "../../components/AnswerWrapper/AnswerWrapper";

const Question = () => {
  const router = useRouter();

  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState(AnswerForm());

  const fetchQuestion = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(
        `${process.env.SERVER_URL}/question/${router.query.id}`,
        { headers }
      );

      setQuestion(response.data.question);
    } catch (err) {
      console.log(err);

      //@ts-expect-error
      if (response.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    if (router.query.id) {
      fetchQuestion();
    }
  }, [router.query.id]);

  return (
    <PageTemplate>
      <div>
        {question && (
          <>
            <QuestionWrapper question={question} />
            <AnswerForm />
            <AnswerWrapper answer={question} />
          </>
        )}
      </div>
    </PageTemplate>
  );
};

export default Question;
