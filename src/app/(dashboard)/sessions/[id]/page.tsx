"use client";

import { SessionDetails } from "@/components";
import { mockSessions } from "@/constants/mocks";
import { useParams } from "next/navigation";

export default function SessionPage() {
  const { id } = useParams();
  const session = mockSessions.find((s) => s.id === id);

  if (!session) {
    return <div>Session not found</div>;
  }

  return <SessionDetails session={session} />;
}
