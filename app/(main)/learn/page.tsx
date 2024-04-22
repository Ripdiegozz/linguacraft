import React from "react";
import { redirect } from "next/navigation";
import { getUnits, getUserProgress } from "@/db/queries";
import Unit from "@/app/(main)/learn/unit";
import Header from "@/app/(main)/learn/header";
import UserProgress from "@/components/user-progress";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";

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
            <div key={unit.id} className="mb-10">
              <Unit
                id={unit.id}
                order={unit.order}
                description={unit.description}
                title={unit.title}
                lessons={unit.lessons}
                activeLesson={undefined}
                activeLessonPercentage={0}
              />
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
