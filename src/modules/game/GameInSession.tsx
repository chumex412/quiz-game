import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { useQuestionQuery } from "@/hooks/use-questions";
import { getQuestions } from "@/services/game";
import { QuizGameType } from "@/types";
import { useEffect, useState } from "react";

function GameInSession() {
  //
  const [data, setData] = useState<QuizGameType[]>();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    
    (async () => {
      setIsLoading(true)
      const data = await getQuestions();

      setData(data);
      setIsLoading(false)
    })();
  }, []);

  if (!data?.length || isLoading) return null;

  const updateStep = (action: "next" | "previous") => {
    setStep((prev) => (action === "next" ? prev + 1 : prev - 1));
  };

  return (
    <section className="w-[80%] py-8 mx-auto">
      <h3 className="text-lg font-medium font-geist-mono mb-4">{data[step]?.question}</h3>
      <div>
        <RadioGroup className="flex flex-col">
          {data[step]?.answers.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <RadioGroupItem className="border border-blue-900" value={item} id={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="flex items-center justify-end gap-x-4">
        {step > 0 && (
          <Button onClick={() => updateStep("previous")}>Previous</Button>
        )}
        <Button onClick={() => updateStep("next")}>Next</Button>
      </div>
    </section>
  );
}

export default GameInSession;
