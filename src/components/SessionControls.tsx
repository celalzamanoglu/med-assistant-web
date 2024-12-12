"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import { MicIcon, ChatIcon, SessionDrawer } from "@components";

export function SessionControls() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };
  const onPressCapture = () => {
    handleOpen();
  };
  const onPressDictate = () => {
    handleOpen();
  };
  const onPressDescribe = () => {
    handleOpen();
  };
  return (
    <div className="space-y-4">
      {/* Save Session Button */}
      <Button
        color="primary"
        size="lg"
        className="w-full"
        onPress={onPressCapture}
      >
        Seansı Kaydet
      </Button>

      {/* Control Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="flat"
          startContent={<MicIcon className="w-4 h-4" />}
          onPress={onPressDictate}
        >
          Dikte
        </Button>
        <Button
          variant="flat"
          startContent={<ChatIcon className="w-4 h-4" />}
          onPress={onPressDescribe}
        >
          Anlat
        </Button>
      </div>
      <SessionDrawer isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
