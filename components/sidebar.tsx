import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/favicon.webp" alt="Bookshelf" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-indigo-600 tracking-wide">
            Linguacraft
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          label="Learn"
          href="/learn"
          iconSrc="/assets/app/learn.svg"
        />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/assets/app/leaderboard.svg"
        />
        <SidebarItem
          label="Quests"
          href="/quests"
          iconSrc="/assets/app/quests.svg"
        />
        <SidebarItem
          label="Shop"
          href="/shop"
          iconSrc="/assets/app/shop.svg"
        />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animte-spin text-muted-foreground"/>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton 
            afterSignOutUrl="/"
          />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
