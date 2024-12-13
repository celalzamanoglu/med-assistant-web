"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  Select,
  SelectItem,
  Button,
  Textarea,
} from "@nextui-org/react";

interface PatientDrawerProps {
  isOpen: boolean;
  onOpenChange: () => void;
  mode?: "add" | "edit";
  initialData?: Patient;
}

interface Patient {
  fullName: string;
  category: "bireysel" | "çocuk" | "yetişkin";
  gender: "male" | "female" | "other";
  age: number;
  diagnosis: string;
}

const categories = [
  { label: "Bireysel", value: "bireysel" },
  { label: "Çocuk", value: "çocuk" },
  { label: "Yetişkin", value: "yetişkin" },
];

const genders = [
  { label: "Erkek", value: "male" },
  { label: "Kadın", value: "female" },
  { label: "Diğer", value: "other" },
];

export function PatientDrawer({
  isOpen,
  onOpenChange,
  mode = "add",
  initialData,
}: PatientDrawerProps) {
  const isEditMode = mode === "edit";
  const title = isEditMode ? "Hasta Düzenle" : "Yeni Hasta";

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
          <h2 className="text-lg font-semibold text-default-900">{title}</h2>
        </DrawerHeader>
        <DrawerBody className="p-6 space-y-12">
          <Input
            label="Ad Soyad"
            placeholder="Hasta adı ve soyadını girin"
            labelPlacement="outside"
            variant="faded"
            defaultValue={initialData?.fullName}
          />

          <Select
            label="Kategori"
            placeholder="Kategori seçin"
            labelPlacement="outside"
            variant="faded"
            defaultSelectedKeys={initialData ? [initialData.category] : []}
          >
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </Select>

          <Select
            label="Cinsiyet"
            placeholder="Cinsiyet seçin"
            labelPlacement="outside"
            variant="faded"
            defaultSelectedKeys={initialData ? [initialData.gender] : []}
          >
            {genders.map((gender) => (
              <SelectItem key={gender.value} value={gender.value}>
                {gender.label}
              </SelectItem>
            ))}
          </Select>

          <Input
            type="number"
            label="Yaş"
            placeholder="Hasta yaşını girin"
            labelPlacement="outside"
            variant="faded"
            defaultValue={initialData?.age?.toString()}
          />

          <Textarea
            label="Tanı"
            placeholder="Hasta tanısını girin"
            labelPlacement="outside"
            variant="faded"
            minRows={3}
            defaultValue={initialData?.diagnosis}
          />
        </DrawerBody>
        <DrawerFooter className="border-t border-divider">
          <div className="flex w-full gap-2">
            {isEditMode && (
              <Button
                color="danger"
                variant="flat"
                className="flex-1"
                onPress={onOpenChange}
              >
                Hastayı Sil
              </Button>
            )}
            <Button color="primary" className="flex-1" onPress={onOpenChange}>
              {isEditMode ? "Kaydet" : "Ekle"}
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
