import React from "react";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import Header from "./header";
import UserProgress from "@/components/user-progress";
import { getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressData = await getUserProgress();
  const unitsData = await getUnits();
  const [userProgress, units] = await Promise.all([
    userProgressData,
    unitsData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    return redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearths={userProgress.hearts}
          points={userProgress.points}
          hasActiveSuscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        <div className="space-y-4">
          {units.map((unit) => (
            <div key={unit.id}>
              <h2 className="text-lg font-bold">{unit.title}</h2>
              <div className="space-y-4">
                {unit.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between"
                  >
                    <h3 className="text-base font-bold">{lesson.title}</h3>
                    <span
                      className={`text-sm font-bold ${
                        lesson.completed ? "text-green-500" : "text-neutral-400"
                      }`}
                    >
                      {lesson.completed ? "Completed" : "In progress"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
