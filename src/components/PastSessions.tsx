"use client";

import { SessionItem } from "./SessionItem";
import { mockSessions } from "@/constants/mocks";

interface PastSessionsProps {
  patientId: string;
}

export function PastSessions({ patientId }: PastSessionsProps) {
  // Filter sessions for the current patient
  const patientSessions = mockSessions
    .filter((session) => session.patientId === patientId)
    .sort((a, b) => b.updated_at.getTime() - a.updated_at.getTime());

  if (patientSessions.length === 0) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Geçmiş Seanslar</h3>
        <p className="text-default-500">Henüz seans kaydı bulunmuyor.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Geçmiş Seanslar</h3>
      <div className="space-y-4">
        {patientSessions.map((session) => (
          <SessionItem key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
}
