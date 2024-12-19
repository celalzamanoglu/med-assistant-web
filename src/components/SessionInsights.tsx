"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

interface SessionInsightsProps {
  insights: string | null;
}

export function SessionInsights({ insights }: SessionInsightsProps) {
  return (
    <Accordion variant="bordered" className="p-0">
      <AccordionItem
        key="session-insights"
        aria-label="Seans Analizi"
        title="Seans Analizi"
        classNames={{
          base: "bg-purple-50 dark:bg-purple-900/20",
          content: "text-purple-600 dark:text-purple-300",
          title: "text-purple-800 dark:text-purple-200 text-lg font-semibold",
          trigger: "px-3 py-2",
          indicator: "pr-3",
        }}
      >
        <div className="px-3 pb-3">
          <p className="text-sm">{insights || "Henüz analiz oluşturulmadı."}</p>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
