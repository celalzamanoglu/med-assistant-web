import { Card, CardBody } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface ChatItemProps {
  patientName: string;
  symptom: string;
  date: string;
}

export function ChatItem({ patientName, symptom, date }: ChatItemProps) {
  const [formattedDate, setFormattedDate] = useState(date);

  useEffect(() => {
    // Format date only on client side
    setFormattedDate(new Date(date).toLocaleDateString("tr-TR"));
  }, [date]);

  return (
    <Card
      isPressable
      className="bg-default-100 hover:bg-default-200 transition-colors w-full"
    >
      <CardBody className="py-2 px-4">
        <h3 className="font-medium">{patientName}</h3>
        <p className="text-small text-default-500">{symptom}</p>
        <time className="text-tiny text-default-400">{formattedDate}</time>
      </CardBody>
    </Card>
  );
}
