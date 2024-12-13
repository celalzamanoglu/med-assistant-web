"use client";

import { Avatar } from "@nextui-org/react";

const avatarColors = [
  "bg-pink-200 dark:bg-pink-500",
  "bg-purple-200 dark:bg-purple-500",
  "bg-indigo-200 dark:bg-indigo-500",
  "bg-blue-200 dark:bg-blue-500",
  "bg-teal-200 dark:bg-teal-500",
  "bg-green-200 dark:bg-green-500",
  "bg-yellow-200 dark:bg-yellow-500",
  "bg-orange-200 dark:bg-orange-500",
  "bg-red-200 dark:bg-red-500",
  "bg-rose-200 dark:bg-rose-500",
];

interface PatientsListItemProps {
  name: string;
  layout?: "horizontal" | "vertical";
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getRandomColor(name: string) {
  const total = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return avatarColors[total % avatarColors.length];
}

export function PatientsListItem({
  name,
  layout = "vertical",
}: PatientsListItemProps) {
  const isHorizontal = layout === "horizontal";
  const bgColor = getRandomColor(name);

  return (
    <button
      className={`
        flex items-center gap-3 
        ${
          isHorizontal
            ? "flex-col p-2 hover:bg-default-100 rounded-lg transition-colors min-w-[80px]"
            : "w-full p-2 rounded-lg hover:bg-default-100 transition-colors"
        }
      `}
    >
      <Avatar
        name={getInitials(name)}
        size="sm"
        classNames={{
          base: bgColor,
          name: "text-default-800 dark:text-white text-small font-medium",
        }}
      />
      <span
        className={`text-sm text-default-900 ${
          isHorizontal ? "text-center" : ""
        }`}
      >
        {name}
      </span>
    </button>
  );
}
