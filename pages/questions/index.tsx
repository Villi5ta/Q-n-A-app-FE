import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import axios from "axios";
import { getCookie } from "cookies-next";
import { QuestionType } from "../../types/question";
import { useRouter } from "next/router";
import QuestionCardWrapper from "../../components/QuestionCardWrapper/QuestionCardWrapper";
import { useEffect } from "react";
import styles from "./questions.module.css";

type MainPageProps = {
  questions: QuestionType[];
  status: any;
};

const Index = ({ questions, status }: MainPageProps) => {
  const router = useRouter();

  useEffect(() => {
    if (status === 401) {
      router.push("/login");
    }
  }, []);

  return (
    <PageTemplate>
      <div className={styles.qPageTitle}>See what the community is up to</div>
      {questions && <QuestionCardWrapper questions={questions} />}
    </PageTemplate>
  );
};

export default Index;

export async function getServerSideProps(ctx: any) {
  try {
    const headers = {
      authorization: getCookie("jwt_token", ctx),
    };

    const response = await axios.get(`${process.env.SERVER_URL}/questions`, {
      headers,
    });
    return {
      props: {
        questions: response.data.all_questions,
        status: response.status,
      },
    };
  } catch (err) {
    return {
      props: {
        //@ts-expect-error
        status: err.response.status,
      },
    };
  }
}
