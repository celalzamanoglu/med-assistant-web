"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

interface SummaryAccordionProps {
  title: string;
  content: string | null;
  defaultOpen?: boolean;
}

export function SummaryAccordion({
  title,
  content,
  defaultOpen = false,
}: SummaryAccordionProps) {
  return (
    <Accordion
      variant="shadow"
      className="p-0 bg-purple-50 dark:bg-purple-950/40 rounded-xl overflow-hidden"
      defaultExpandedKeys={defaultOpen ? ["summary"] : undefined}
    >
      <AccordionItem
        key="summary"
        aria-label={title}
        title={title}
        classNames={{
          content: "text-default-700 dark:text-default-300",
          title: "text-lg font-semibold text-purple-800 dark:text-purple-200",
          trigger:
            "px-6 py-4 bg-purple-100/80 dark:bg-purple-900/60 hover:bg-purple-200/80 dark:hover:bg-purple-900/80 transition-colors",
          indicator: "text-purple-800 dark:text-purple-200",
          base: "group-[.is-splitted]:border-none",
        }}
      >
        <div className="px-6 pb-4">
          <p className="text-sm">{content || "Henüz özet oluşturulmadı."}</p>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
