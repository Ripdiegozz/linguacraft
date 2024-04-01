import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: any; // TODO: Replace with the DB types
  hearths: number;
  points: number;
  hasActiveSuscription: boolean;
};

const UserProgress = ({
  activeCourse,
  hearths,
  points,
  hasActiveSuscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button>
          <Image
            src={activeCourse.src}
            alt={activeCourse.title}
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/assets/app/points.svg"
            alt="Points"
            width={28}
            height={28}
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/assets/app/heart.svg"
            alt="Hearths"
            width={22}
            height={22}
            className="mr-2"
          />
          {hasActiveSuscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearths
          )}
        </Button>
      </Link>
    </div>
  );
};

export default UserProgress;
