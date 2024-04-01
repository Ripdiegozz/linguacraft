import React from 'react'
import { FeedWrapper } from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import Header from './header';
import UserProgress from '@/components/user-progress';

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress 
          activeCourse={{ title: 'Spanish', src: '/assets/flags/es.svg'}}
          hearths={5}
          points={100}
          hasActiveSuscription={true}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
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
