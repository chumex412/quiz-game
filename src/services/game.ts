import { DataResponse, QuizGameType } from "@/types";
import { API } from "./api";

export const getQuestions = async () => {
  const response = await API.get<QuizGameType[]>("?amount=10&category=11", {
    transformResponse: (data) => {
      const newData: QuizGameType[] = (data.results as DataResponse[]).map(
        (item) => ({
          question: item.question,
          answers: [...item.incorrect_answers, item.correct_answer],
          correct_answer: item.correct_answer,
        }),
      );

      return newData;
    },
  });

  return response.data;
};
