"use client";

import { Button } from "@nextui-org/react";
import { MicIcon, ChatIcon, AudioWaveIcon } from "@components";

interface SessionControlsProps {
  onOpen: () => void;
  onModeChange: (mode: "record" | "manual") => void;
}

export function SessionControls({
  onOpen,
  onModeChange,
}: SessionControlsProps) {
  const handleRecordClick = () => {
    onModeChange("record");
    onOpen();
  };

  const handleManualClick = () => {
    onModeChange("manual");
    onOpen();
  };

  return (
    <div className="space-y-4">
      <Button
        color="primary"
        size="lg"
        className="w-full h-16"
        onPress={handleRecordClick}
        startContent={<AudioWaveIcon className="w-5 h-5" color="white" />}
      >
        Seans Kaydet
      </Button>

      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="flat"
          startContent={<MicIcon className="w-4 h-4" />}
          onPress={handleRecordClick}
        >
          Dikte
        </Button>
        <Button
          variant="flat"
          startContent={<ChatIcon className="w-4 h-4" />}
          onPress={handleManualClick}
        >
          Anlat
        </Button>
      </div>
    </div>
  );
}
