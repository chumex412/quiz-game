import { getQuestions } from "@/services/game";
import { useQuery } from "@tanstack/react-query";

export const useQuestionQuery = () => {
  return useQuery({ queryKey: ["quiz-game"], queryFn: getQuestions });
};
