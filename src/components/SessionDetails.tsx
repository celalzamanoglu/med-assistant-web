"use client";

import { Session } from "@/declarations";
import { Avatar } from "@nextui-org/react";
import { getInitials } from "@/utils";
import { SessionInsights } from "./SessionInsights";
import { SessionCard } from "./SessionCard";

interface SessionDetailsProps {
  session: Session;
}

export function SessionDetails({ session }: SessionDetailsProps) {
  const formattedDate = new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="space-y-6 w-full">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar
            name={getInitials(session.patientName)}
            size="sm"
            classNames={{
              base: "bg-primary",
              name: "text-white font-medium",
            }}
          />
          <span className="text-sm text-default-600">
            {session.patientName}
          </span>
        </div>
        <h1 className="text-2xl font-bold">{session.title}</h1>
        <div className="flex gap-4 text-sm text-default-500">
          <span>Oluşturulma: {formattedDate.format(session.created_at)}</span>
          <span>
            Son güncelleme: {formattedDate.format(session.updated_at)}
          </span>
        </div>
      </div>

      {/* Insights Section */}
      <SessionInsights insights={session.insights} />

      {/* Session Details Cards */}
      <div className="space-y-4">
        <SessionCard title="Tanı" content={session.diagnosis} />
        <SessionCard title="Şikayet" content={session.complaint} />
        <SessionCard title="Hikaye" content={session.story} />
        <SessionCard
          title="Klinik Bulgular"
          content={session.clinical_findings}
        />
        <SessionCard title="Tedavi" content={session.treatment} />
      </div>
    </div>
  );
}
