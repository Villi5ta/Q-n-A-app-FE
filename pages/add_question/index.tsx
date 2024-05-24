import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import QuestionForm from "../../components/QuestionForm/QuestionForm";

const Index = () => {
  const postQuestion = () => {
    console.log("aa");
  };

  return (
    <PageTemplate>
      <QuestionForm />
    </PageTemplate>
  );
};

export default Index;
