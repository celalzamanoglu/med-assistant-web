"use client";

import { Button } from "@nextui-org/react";
import { MicIcon, UploadIcon, ChatIcon } from "@components";

export function SessionControls() {
  return (
    <div className="space-y-4">
      {/* Save Session Button */}
      <Button color="primary" size="lg" className="w-full">
        Seansı Kaydet
      </Button>

      {/* Control Buttons */}
      <div className="grid grid-cols-3 gap-2">
        <Button variant="flat" startContent={<MicIcon className="w-4 h-4" />}>
          Dikte
        </Button>
        <Button
          variant="flat"
          startContent={<UploadIcon className="w-4 h-4" />}
        >
          Yükle
        </Button>
        <Button variant="flat" startContent={<ChatIcon className="w-4 h-4" />}>
          Anlat
        </Button>
      </div>
    </div>
  );
}
