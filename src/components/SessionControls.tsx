"use client";

import { Button } from "@nextui-org/react";
import { MicIcon, ChatIcon } from "@components";

interface SessionControlsProps {
  onOpen: () => void;
}

export function SessionControls({ onOpen }: SessionControlsProps) {
  return (
    <div className="space-y-4">
      <Button color="primary" size="lg" className="w-full" onClick={onOpen}>
        Seans Kaydet
      </Button>

      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="flat"
          startContent={<MicIcon className="w-4 h-4" />}
          onPress={onOpen}
        >
          Dikte
        </Button>
        <Button
          variant="flat"
          startContent={<ChatIcon className="w-4 h-4" />}
          onPress={onOpen}
        >
          Anlat
        </Button>
      </div>
    </div>
  );
}
