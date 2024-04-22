import { challenges, challengesOptions } from "@/db/schema";
import { cn } from "@/lib/utils";
import React from "react";
import { Card } from "./card";

type Props = {
  options: (typeof challengesOptions.$inferSelect)[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number | null;
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
};

export const Challenge = ({
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
  type,
}: Props) => {
  return (
    <div
      className={cn(
        "grid gap-2",
        type === "ASSIST" && "grid-cols-1",
        type === "SELECT" &&
          "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
      )}
    >
      {options.map((option, _idx) => (
        <Card
          key={option.id}
          id={option.id}
          text={option.text}
          imgSrc={option.imageSrc}
          audioSrc={option.audioSrc}
          shortcut={`${_idx + 1}`}
          selected={selectedOption === option.id}
          onClick={() => onSelect(option.id)}
          status={status}
          disabled={disabled}
          type={type}
        />
      ))}
    </div>
  );
};