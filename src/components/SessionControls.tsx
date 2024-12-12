"use client";

import { Button } from "@nextui-org/react";
import { MicIcon, UploadIcon, ChatIcon } from "@components";

interface SessionControlsProps {
  onOpen: () => void;
}

export function SessionControls({ onOpen }: SessionControlsProps) {
  return (
    <div className="space-y-4">
      <Button color="primary" size="lg" className="w-full" onClick={onOpen}>
        Seansı Kaydet
      </Button>

      <div className="grid grid-cols-3 gap-2">
        <Button
          variant="flat"
          startContent={<MicIcon className="w-4 h-4" />}
          onClick={onOpen}
        >
          Dikte
        </Button>
        <Button
          variant="flat"
          startContent={<UploadIcon className="w-4 h-4" />}
          onClick={onOpen}
        >
          Yükle
        </Button>
        <Button
          variant="flat"
          startContent={<ChatIcon className="w-4 h-4" />}
          onClick={onOpen}
        >
          Anlat
        </Button>
      </div>
    </div>
  );
}
