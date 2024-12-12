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
} from "@nextui-org/react";

const noteTypes = [
  "SOAP",
  "DAP",
  "Theraphy Intake",
  "Psychiatric Intake",
  "Consult Note",
];

const locations = [
  { label: "Online", value: "online" },
  { label: "Yüz yüze", value: "in_person" },
];

const cptCodes = [
  { label: "90791 - Psychiatric Diagnostic Evaluation", value: "90791" },
  {
    label: "90792 - Psychiatric Diagnostic Evaluation with Medical Services",
    value: "90792",
  },
  { label: "90832 - Psychotherapy, 30 minutes", value: "90832" },
  { label: "90834 - Psychotherapy, 45 minutes", value: "90834" },
  { label: "90837 - Psychotherapy, 60 minutes", value: "90837" },
];

interface SessionDrawerProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export function SessionDrawer({ isOpen, onOpenChange }: SessionDrawerProps) {
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
                tabList: "w-full relative",
                cursor: "w-full",
                tab: "max-w-fit h-10 px-1",
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
              label="Hasta İsmi"
              placeholder="Hasta ismini girin"
              labelPlacement="outside"
            />

            <Input
              label="Not Başlığı"
              placeholder="Not başlığını girin"
              labelPlacement="outside"
            />

            <Select
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

            <Select
              label="CPT Kodu"
              placeholder="CPT kodu seçin"
              labelPlacement="outside"
            >
              {cptCodes.map((code) => (
                <SelectItem key={code.value} value={code.value}>
                  {code.label}
                </SelectItem>
              ))}
            </Select>
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
