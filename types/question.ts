export type QuestionType = {
  id: string;
  title: string;
  question: string;
  userName: string;
  answers: AnswerType[];
  createdAt: string;
};

export type AnswerType = {
  answers: any;
  text: string;
  userId: string;
};
