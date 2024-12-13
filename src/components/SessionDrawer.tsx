"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Tabs,
  Tab,
  Input,
  Select,
  SelectItem,
  Button,
  Textarea,
} from "@nextui-org/react";

const noteTypes = ["SOAP", "DAP", "Consult Note"];

const locations = [
  { label: "Online", value: "online" },
  { label: "Yüz yüze", value: "in_person" },
];

interface SessionDrawerProps {
  mode?: "record" | "manual";
  isOpen: boolean;
  onOpenChange: () => void;
}

export function SessionDrawer({
  mode = "record",
  isOpen,
  onOpenChange,
}: SessionDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="right"
      size="lg"
      backdrop="blur"
    >
      <DrawerContent>
        <DrawerHeader className="border-b border-divider">
          <h2 className="text-lg font-semibold text-default-900">Yeni Seans</h2>
        </DrawerHeader>
        <DrawerBody className="p-6 space-y-6">
          {/* Note Type Selection */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-default-900">Not Tipi</h3>
            <Tabs
              aria-label="Note Types"
              classNames={{
                tabList: "w-full relative gap-14",
                cursor: "w-full",
                tab: "max-w-fit h-10 px-8",
                tabContent: "group-data-[selected=true]:text-primary",
              }}
            >
              {noteTypes.map((type) => (
                <Tab key={type} title={type} />
              ))}
            </Tabs>
          </div>

          {/* Session Details */}
          <div className="space-y-12">
            <h3 className="text-lg font-semibold text-default-900">
              Seans Detayları Ekle
            </h3>

            <Input
              isClearable
              label="Hasta İsmi"
              placeholder="Hasta ismini girin"
              labelPlacement="outside"
              variant="faded"
            />

            <Input
              isClearable
              label="Başlık"
              placeholder="Başlık girin"
              labelPlacement="outside"
              variant="faded"
            />

            {mode === "record" && (
              <Select
                variant="faded"
                label="Lokasyon"
                placeholder="Lokasyon seçin"
                labelPlacement="outside"
              >
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </Select>
            )}

            {mode === "manual" && (
              <Textarea
                label="Notlarınız"
                placeholder="Seans notlarınızı buraya yazın..."
                labelPlacement="outside"
                minRows={8}
                className="mt-6"
                variant="faded"
              />
            )}
          </div>
        </DrawerBody>
        <DrawerFooter className="border-t border-divider">
          <Button color="primary" size="lg" className="w-full">
            Seansı Başlat
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
