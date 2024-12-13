"use client";

import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import {
  PatientsListItem,
  PatientDrawer,
  PlusIcon,
  SearchIcon,
} from "@components";
import { mockPatients } from "@/constants/mocks";

export function PatientsList() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-default-900">Hastalar</h2>
          <Button
            size="sm"
            color="primary"
            startContent={<PlusIcon color="white" className="w-4 h-4" />}
            onPress={() => setIsDrawerOpen(true)}
          >
            Hasta Ekle
          </Button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <Input
            placeholder="Hasta ara..."
            startContent={<SearchIcon className="text-default-400 w-4 h-4" />}
            size="sm"
          />
        </div>

        {/* Patients List */}
        <div className="space-y-2 overflow-y-auto">
          {mockPatients.map((patient) => (
            <PatientsListItem key={patient.id} name={patient.name} />
          ))}
        </div>
      </div>

      <PatientDrawer
        isOpen={isDrawerOpen}
        onOpenChange={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
