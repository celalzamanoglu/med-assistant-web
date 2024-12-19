"use client";

import { SummaryAccordion } from "./SummaryAccordion";

interface SessionInsightsProps {
  insights: string | null;
}

export function SessionInsights({ insights }: SessionInsightsProps) {
  return (
    <SummaryAccordion
      title="Seans Özeti"
      content={insights}
      defaultOpen={true}
    />
  );
}
