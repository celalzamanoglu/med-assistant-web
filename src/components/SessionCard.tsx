"use client";

import { Card, CardBody } from "@nextui-org/react";

interface SessionCardProps {
  title: string;
  content: string | null;
}

export function SessionCard({ title, content }: SessionCardProps) {
  return (
    <Card>
      <CardBody className="space-y-2">
        <h3 className="font-semibold text-default-700">{title}</h3>
        <p className="text-sm text-default-600">
          {content || "Bilgi girilmemiş."}
        </p>
      </CardBody>
    </Card>
  );
}
