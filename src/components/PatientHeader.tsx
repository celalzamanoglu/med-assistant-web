"use client";

import { Avatar } from "@nextui-org/react";
import { getInitials } from "@/utils";
interface PatientHeaderProps {
  name: string;
}

export function PatientHeader({ name }: PatientHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        name={getInitials(name)}
        size="lg"
        classNames={{
          base: "bg-primary",
          name: "text-white text-xl font-medium",
        }}
      />
      <h2 className="text-2xl font-bold">{name}</h2>
    </div>
  );
}
