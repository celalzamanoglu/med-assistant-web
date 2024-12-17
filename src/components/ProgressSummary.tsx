"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

interface ProgressSummaryProps {
  patientId: string;
}

// Mock summaries for different patients
const patientSummaries: Record<string, string> = {
  "1": "Hasta düzenli olarak seanslarına katılıyor. Son 3 seansta kaygı seviyesinde belirgin azalma gözlemlendi. Uyku düzeni iyileşme gösteriyor. Sosyal aktivitelere katılım artmaya başladı.",
  "2": "İlaç tedavisine olumlu yanıt alınıyor. Uyku düzeni ve iştah normale dönmeye başladı. Sosyal izolasyon devam ediyor ancak aile içi iletişimde iyileşme var.",
  "3": "Akademik performansta iyileşme gözlemleniyor. Ev ödevleri ve sorumluluklar daha düzenli takip ediliyor. Dikkat süresinde artış var.",
  "5": "Maruz bırakma egzersizleri olumlu sonuç veriyor. Ritüellerin sıklığı ve süresi azaldı. Günlük yaşam aktivitelerinde iyileşme var.",
  "6": "Sosyal durumlarda kaygı seviyesi azalmaya başladı. Kaçınma davranışları azalıyor. İş yerinde iletişim becerileri gelişiyor.",
};

export function ProgressSummary({ patientId }: ProgressSummaryProps) {
  const summary =
    patientSummaries[patientId] || "Henüz takip özeti oluşturulmadı.";

  return (
    <Accordion variant="bordered" className="p-0">
      <AccordionItem
        key="progress-summary"
        aria-label="Takip Özeti"
        title="Takip Özeti"
        classNames={{
          base: "bg-purple-50 dark:bg-purple-900/20",
          content: "text-purple-600 dark:text-purple-300",
          title: "text-purple-800 dark:text-purple-200 font-medium",
          trigger: "px-3 py-2",
          indicator: "pr-3",
        }}
      >
        <div className="px-3 pb-3">
          <p className="text-sm">{summary}</p>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
