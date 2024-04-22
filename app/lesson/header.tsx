import { Progress } from "@/components/ui/progress";
import { InfinityIcon, XIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: Props) => {
  return (
    <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
      <XIcon
        onClick={() => console.log("You pressed XIcon")}
        size={24}
        className="text-slate-500 hover:opacity-75 transition cursor-pointer"
      />
      <Progress value={percentage} />
      <div className="flex items-center font-bold text-rose-500">
        <Image
          src="/assets/app/heart.svg"
          alt="Heart"
          width={28}
          height={28}
          className="mr-2"
        />
        {
          hasActiveSubscription ? (
            <InfinityIcon className="h-6 w-6 stroke-[3]"/>
          ) : (
            hearts
          )
        }
      </div>
    </header>
  );
};
