"use client";

import { Card, CardBody, Chip, Avatar } from "@nextui-org/react";
import { MicIcon, NoteIcon, AudioWaveIcon } from "@components";
import { Session } from "@/declarations";
import { getInitials } from "@/utils";

const TypeIcon = {
  dictate: MicIcon,
  note: NoteIcon,
  record: AudioWaveIcon,
};

const StatusChip = {
  in_progress: { color: "primary" as const, text: "Devam Ediyor" },
  error: { color: "danger" as const, text: "İptal Edildi" },
  done: { color: "success" as const, text: "Tamamlandı" },
  stopped: { color: "warning" as const, text: "Beklemede" },
  generating: { color: "secondary" as const, text: "Notlar Oluşturuluyor" },
};

interface SessionItemProps {
  session: Session;
}

export function SessionItem({ session }: SessionItemProps) {
  const Icon = TypeIcon[session.type];
  const status = StatusChip[session.status];
  const formattedDate = new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <Card className="w-full" isPressable>
      <CardBody className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-3 items-center">
            <Avatar
              name={getInitials(session.patientName)}
              size="sm"
              classNames={{
                base: "bg-primary",
                name: "text-white text-small font-medium",
              }}
            />
            <div>
              <h3 className="text-lg font-semibold">{session.patientName}</h3>
              <p className="text-sm text-default-500">{session.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Chip size="sm" color={status.color} variant="flat">
              {status.text}
            </Chip>
            <Icon className="w-5 h-5 text-default-400" />
          </div>
        </div>

        <p className="text-sm line-clamp-2 mb-4">{session.story}</p>

        <div className="border-t border-divider pt-2">
          <div className="flex justify-between items-center text-xs text-default-400">
            <span>Oluşturulma: {formattedDate.format(session.created_at)}</span>
            <span>
              Son güncelleme: {formattedDate.format(session.updated_at)}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
