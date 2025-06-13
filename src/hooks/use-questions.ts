import { getQuestions } from "@/services/game";
import { useQuery } from "@tanstack/react-query";

export const useQuestionQuery = () => {
  return useQuery({
    queryKey: ["quiz-game"],
    queryFn: getQuestions,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    refetchOnWindowFocus: false,
  });
};
