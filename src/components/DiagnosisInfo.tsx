"use client";

import { Card, CardBody } from "@nextui-org/react";

interface DiagnosisInfoProps {
  diagnosis?: string | null;
}

export function DiagnosisInfo({ diagnosis }: DiagnosisInfoProps) {
  return (
    <Card>
      <CardBody className="py-3">
        <p className="text-default-600">
          <span className="font-semibold">Tanı:</span>{" "}
          {diagnosis || "Henüz belirlenmedi"}
        </p>
      </CardBody>
    </Card>
  );
}
