"use client";

import { UserGuide } from "@components";
import { SessionItem } from "@/components/SessionItem";
import { mockSessions } from "@/constants/mocks";

export default function DashboardPage() {
  const hasSessions = mockSessions.length > 0;
  const sortedSessions = [...mockSessions].sort(
    (a, b) => b.updated_at.getTime() - a.updated_at.getTime()
  );

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">
          {hasSessions ? "Son eklenenler" : "Hoş Geldiniz"}
        </h1>
      </div>
      {hasSessions ? (
        <div className="space-y-4">
          {sortedSessions.map((session) => (
            <SessionItem key={session.id} session={session} />
          ))}
        </div>
      ) : (
        <UserGuide />
      )}
    </div>
  );
}
