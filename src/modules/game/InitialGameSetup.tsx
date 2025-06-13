import { Button } from "@/components/ui/button";
import React from "react";

function InitialGameSetup({ onGameStart }: { onGameStart: VoidFunction }) {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <Button onClick={onGameStart}>Start Game</Button>
    </section>
  );
}

export default InitialGameSetup;
