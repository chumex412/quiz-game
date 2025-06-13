"use client";

import GameInSession from "@/modules/game/GameInSession";
import InitialGameSetup from "@/modules/game/InitialGameSetup";
import React, { useState } from "react";

function Page() {
  const [gameProgress, setGameProgress] = useState<"start" | "stop" | null>(
    null,
  );

  return (
    <section className="bg-blue-100 min-h-screen w-full">
      {!gameProgress ? (
        <InitialGameSetup onGameStart={() => setGameProgress("start")} />
      ) : gameProgress === "start" ? (
        <GameInSession />
      ) : (
        <></>
      )}
    </section>
  );
}

export default Page;
