"use client";

import { Card, ScrollShadow, Button } from "@nextui-org/react";
import { ChatItem, PlusIcon } from "@/components";

// Helper function to group chats by date category
const groupChatsByDate = (chats: typeof mockChats) => {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  return chats.reduce(
    (groups, chat) => {
      const chatDate = new Date(chat.date).toDateString();

      if (chatDate === today) {
        groups.today.push(chat);
      } else if (chatDate === yesterday) {
        groups.yesterday.push(chat);
      } else {
        groups.older.push(chat);
      }

      return groups;
    },
    { today: [], yesterday: [], older: [] } as Record<string, typeof mockChats>
  );
};

// Mock data with more conversations
const mockChats = [
  {
    id: 1,
    patientName: "Ayşe Kaya",
    symptom: "Baş ağrısı - 3 gündür",
    date: new Date().toISOString(), // Today
  },
  {
    id: 2,
    patientName: "Mehmet Demir",
    symptom: "Mide bulantısı",
    date: new Date().toISOString(), // Today
  },
  {
    id: 3,
    patientName: "Fatma Yılmaz",
    symptom: "Sırt ağrısı",
    date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
  },
  {
    id: 4,
    patientName: "Ali Öztürk",
    symptom: "Öksürük",
    date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
  },
  {
    id: 5,
    patientName: "Zeynep Kara",
    symptom: "Eklem ağrısı",
    date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
  },
  {
    id: 6,
    patientName: "Ahmet Şahin",
    symptom: "Yüksek tansiyon",
    date: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
  },
];

export function DrawerNavigation() {
  const groupedChats = groupChatsByDate(mockChats);

  return (
    <Card className="h-screen w-80 rounded-none">
      <div className="p-4 border-b border-divider">
        <h1 className="text-xl font-bold">MedAssistant</h1>
      </div>
      <ScrollShadow className="h-full">
        <div className="p-4 space-y-6">
          <Button
            startContent={<PlusIcon />}
            color="primary"
            className="w-full"
          >
            Yeni Ziyaret
          </Button>

          {groupedChats.today.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-default-500">Bugün</h2>
              {groupedChats.today.map((chat) => (
                <ChatItem key={chat.id} {...chat} />
              ))}
            </div>
          )}

          {groupedChats.yesterday.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-default-500">Dün</h2>
              {groupedChats.yesterday.map((chat) => (
                <ChatItem key={chat.id} {...chat} />
              ))}
            </div>
          )}

          {groupedChats.older.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-default-500">Geçmiş</h2>
              {groupedChats.older.map((chat) => (
                <ChatItem key={chat.id} {...chat} />
              ))}
            </div>
          )}
        </div>
      </ScrollShadow>
    </Card>
  );
}
