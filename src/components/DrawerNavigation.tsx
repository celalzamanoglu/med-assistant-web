"use client";

import { Card, ScrollShadow } from "@nextui-org/react";
import { ChatItem } from "@/components";

// Mock data for previous conversations
const mockChats = [
  {
    id: 1,
    patientName: "Ayşe Kaya",
    symptom: "Baş ağrısı - 3 gündür",
    date: "2024-03-10",
  },
  {
    id: 2,
    patientName: "Mehmet Demir",
    symptom: "Mide bulantısı",
    date: "2024-03-09",
  },
  // Add more mock chats...
];

export function DrawerNavigation() {
  return (
    <Card className="h-screen w-80 rounded-none">
      <div className="p-4 border-b border-divider">
        <h1 className="text-xl font-bold">MedAssistant</h1>
      </div>
      <ScrollShadow className="h-full">
        <div className="p-4 space-y-2">
          <h2 className="text-sm font-semibold text-default-500 mb-4">
            Önceki Görüşmeler
          </h2>
          {mockChats.map((chat) => (
            <ChatItem key={chat.id} {...chat} />
          ))}
        </div>
      </ScrollShadow>
    </Card>
  );
}
