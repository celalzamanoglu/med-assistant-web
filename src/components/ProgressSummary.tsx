"use client";

import { SummaryAccordion } from "./SummaryAccordion";

interface ProgressSummaryProps {
  summary: string | null;
}

export function ProgressSummary({ summary }: ProgressSummaryProps) {
  return (
    <SummaryAccordion
      title="Takip Özeti"
      content={summary || "Henüz takip özeti oluşturulmadı."}
      defaultOpen={true}
    />
  );
}
