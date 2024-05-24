import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import axios from "axios";
import { QuestionType } from "../../types/question";
import { useRouter } from "next/router";
import QuestionCardWrapper from "../../components/QuestionCardWrapper/QuestionCardWrapper";
import styles from "./questions.module.css";

type MainPageProps = {
  questions: QuestionType[];
  status: any;
};

const Index = ({ questions, status }: MainPageProps) => {
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
    const response = await axios.get(`${process.env.SERVER_URL}/questions`);
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
