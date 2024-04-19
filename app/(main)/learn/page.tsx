import React from 'react'
import { FeedWrapper } from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import Header from './header';
import UserProgress from '@/components/user-progress';
import { getUserProgress } from '@/db/queries';
import { redirect } from 'next/navigation';

const LearnPage = async () => {
  const userProgressData = await getUserProgress();
  const [ userProgress ] = await Promise.all([userProgressData])

  if (!userProgress || !userProgress.activeCourse) {
    return redirect('/courses');
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
        <Header title={userProgress.activeCourse.title  } />
        <div className="space-y-4">
          <div className="h-[700px] bg-blue-200 w-full" />
          <div className="h-[700px] bg-blue-200 w-full" />
          <div className="h-[700px] bg-blue-200 w-full" />
          <div className="h-[700px] bg-blue-200 w-full" />
          <div className="h-[700px] bg-blue-200 w-full" />
          <div className="h-[700px] bg-blue-200 w-full" />
          <div className="h-[700px] bg-blue-200 w-full" />
          <div className="h-[700px] bg-blue-200 w-full" />
        </div>
      </FeedWrapper>
    </div>
  )
}

export default LearnPage;
