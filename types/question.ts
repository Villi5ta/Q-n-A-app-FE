export type QuestionType = {
  id: string;
  title: string;
  question: string;
  answer: AnswerType[];
};

export type AnswerType = {
  text: string;
  userId: string;
};
