"use client";

import { Avatar } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { getInitials } from "@/utils";

interface PatientsListItemProps {
  name: string;
  layout?: "horizontal" | "vertical";
  isSelected?: boolean;
  onClick?: () => void;
  profileColor: {
    light: string;
    dark: string;
  };
}

export function PatientsListItem({
  name,
  layout = "vertical",
  isSelected = false,
  onClick,
  profileColor,
}: PatientsListItemProps) {
  const isHorizontal = layout === "horizontal";
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-3 
        ${
          isHorizontal
            ? "flex-col p-2 hover:bg-default-100 rounded-lg transition-colors min-w-[80px]"
            : "w-full p-2 rounded-lg hover:bg-default-100 transition-colors"
        }
        ${isSelected ? "bg-default-100" : ""}
      `}
    >
      <Avatar
        name={getInitials(name)}
        size={isHorizontal ? "md" : "sm"}
        classNames={{
          name: "text-default-800 dark:text-white text-small font-medium",
          base: "transition-colors",
        }}
        style={{
          backgroundColor:
            theme === "dark" ? profileColor.dark : profileColor.light,
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
