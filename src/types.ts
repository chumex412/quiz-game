export type DataResponse = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuizGameType = {
  question: string;
  answers: string[];
  correct_answer: string;
};
