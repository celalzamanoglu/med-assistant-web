"use client";

import { useState } from "react";
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
  DatePicker,
} from "@nextui-org/react";
import { parseDate, CalendarDate } from "@internationalized/date";
import { Patient } from "@/declarations";

interface PatientDrawerProps {
  isOpen: boolean;
  onOpenChange: () => void;
  mode?: "add" | "edit";
  initialData?: Patient;
}

const categories = [
  { label: "Çocuk", value: "çocuk" },
  { label: "Yetişkin", value: "yetişkin" },
];

const genders = [
  { label: "Erkek", value: "male" },
  { label: "Kadın", value: "female" },
  { label: "Diğer", value: "other" },
];

const currentYear = new Date().getFullYear();

export function PatientDrawer({
  isOpen,
  onOpenChange,
  mode = "add",
  initialData,
}: PatientDrawerProps) {
  const isEditMode = mode === "edit";
  const title = isEditMode ? "Hasta Düzenle" : "Yeni Hasta";

  const [age, setAge] = useState<string>(initialData?.age?.toString() || "");
  const [birthDate, setBirthDate] = useState<CalendarDate | null>(null);

  // Update birth date when age changes
  const handleAgeChange = (value: string) => {
    setAge(value);
    if (value && !isNaN(Number(value))) {
      const year = currentYear - Number(value);
      setBirthDate(parseDate(`${year}-01-01`));
    }
  };

  // Update age when birth date changes
  const handleBirthDateChange = (date: CalendarDate | null) => {
    setBirthDate(date);
    if (date) {
      const calculatedAge = currentYear - date.year;
      setAge(calculatedAge.toString());
    } else {
      setAge("");
    }
  };

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
            defaultValue={initialData?.name}
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

          <div className="flex gap-4">
            <Input
              type="number"
              label="Yaş"
              placeholder="Yaş girin"
              labelPlacement="outside"
              variant="faded"
              value={age}
              onValueChange={handleAgeChange}
              className="flex-1"
              min={0}
              max={150}
            />
            <div className="flex-[2] mt-[-2]">
              <DatePicker
                label="Doğum Tarihi"
                value={birthDate}
                onChange={handleBirthDateChange}
                labelPlacement="outside"
                showMonthAndYearPickers
                variant="faded"
              />
            </div>
          </div>
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
