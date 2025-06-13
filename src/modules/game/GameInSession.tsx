import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useQuestionQuery } from "@/hooks/use-questions";
import React, { useState } from "react";

function GameInSession() {
  const { data, isLoading, error } = useQuestionQuery();
  const [step, setStep] = useState(0);

  if (error || isLoading) return null;

  if (!data) return;

  const updateStep = (action: "next" | "previous") => {
    setStep((prev) => (action === "next" ? prev + 1 : prev - 1));
  };

  return (
    <section>
      <h3>{data[step]?.question}</h3>
      <div>
        <RadioGroup>
          {data[step]?.answers.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <RadioGroupItem value={item} id={item} />
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
