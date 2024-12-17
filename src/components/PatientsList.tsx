"use client";

import { useState } from "react";
import { Input, Button, ScrollShadow, Link } from "@nextui-org/react";

import {
  PatientsListItem,
  PatientDrawer,
  PlusIcon,
  SearchIcon,
} from "@components";

import { Patient } from "@/declarations";
import { mockPatients } from "@/constants/mocks";

interface PatientsListProps {
  layout?: "horizontal" | "vertical";
  onPatientSelect?: (patient: Patient) => void;
  selectedPatientId?: string;
}

export function PatientsList({
  layout = "vertical",
  onPatientSelect,
  selectedPatientId,
}: PatientsListProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isHorizontal = layout === "horizontal";

  return (
    <>
      <div className={`h-full flex flex-col ${isHorizontal ? "gap-4" : ""}`}>
        {/* Header and Search */}
        <div className={`${isHorizontal ? "space-y-3" : ""}`}>
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

          <div className="mb-4">
            <Input
              placeholder="Hasta ara..."
              startContent={<SearchIcon className="text-default-400 w-4 h-4" />}
              size="sm"
            />
          </div>
        </div>

        {/* Patients List */}
        {isHorizontal ? (
          <ScrollShadow
            orientation="horizontal"
            className="w-full"
            hideScrollBar={false}
          >
            <div className="flex gap-2 pb-2 px-1">
              {mockPatients.map((patient) => {
                console.log(
                  `Passing color for ${patient.name}:`,
                  patient.profile_color
                );
                return (
                  <div key={patient.id} className="flex-shrink-0">
                    <PatientsListItem
                      name={patient.name}
                      layout="horizontal"
                      isSelected={patient.id === selectedPatientId}
                      onClick={() => onPatientSelect?.(patient)}
                      profileColor={patient.profile_color}
                    />
                  </div>
                );
              })}
            </div>
          </ScrollShadow>
        ) : (
          <ScrollShadow className="flex-1" hideScrollBar={false}>
            <div className="space-y-2 pr-2">
              {mockPatients.map((patient) => {
                console.log(
                  `Passing color for ${patient.name}:`,
                  patient.profile_color
                );
                return (
                  <PatientsListItem
                    key={patient.id}
                    name={patient.name}
                    layout="vertical"
                    isSelected={patient.id === selectedPatientId}
                    onClick={() => onPatientSelect?.(patient)}
                    profileColor={patient.profile_color}
                  />
                );
              })}
            </div>
          </ScrollShadow>
        )}

        {/* Contact Us Link - Only show in vertical layout */}
        {!isHorizontal && (
          <div className="mt-auto pt-4 border-t border-divider">
            <Link
              href="mailto:support@medassistant.com"
              className="text-sm text-default-500 hover:text-primary transition-colors"
            >
              Destek için iletişime geçin
            </Link>
          </div>
        )}
      </div>

      <PatientDrawer
        isOpen={isDrawerOpen}
        onOpenChange={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
