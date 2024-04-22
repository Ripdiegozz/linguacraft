"use client";

import { challengeProgress, challenges, challengesOptions } from "@/db/schema";
import { useState } from "react";
import { Header } from "./header";

type Props = {
    initialPercentage: number;
    initialHearts: number;
    initialLessonId: number;
    initialLessonChallenges: {
      completed: boolean;
      id: number;
      order: number;
      lessonId: number;
      type: "SELECT" | "ASSIST";
      question: string;
      challengesOptions: {
        id: number;
        imageSrc: string | null;
        challengeId: number;
        text: string;
        isCorrect: boolean;
        audioSrc: string | null;
      }[];
      challengesProgress: typeof challengeProgress.$inferSelect[];
    }[];
    userSubscription: any; // TODO: Replace with suscription DB type
}

export const Quiz = ({
    initialPercentage,
    initialHearts,
    initialLessonId,
    initialLessonChallenges,
    userSubscription,
} : Props) => {

  const [hearts, setHearts] = useState<number>(initialHearts);
  const [percentage, setPercentage] = useState<number>(initialPercentage);

  return (
    <>
      <Header 
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      /> 
    </>
  )
}
