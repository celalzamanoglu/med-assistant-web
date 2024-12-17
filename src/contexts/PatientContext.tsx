"use client";

import React, { createContext, useContext, useState } from "react";
import { Patient } from "@/declarations";

interface PatientContextType {
  selectedPatient: Patient | null;
  handleOnPressPatient: (patient: Patient | null) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export function PatientProvider({ children }: { children: React.ReactNode }) {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handleOnPressPatient = (patient: Patient | null) => {
    if (patient === selectedPatient) {
      setSelectedPatient(null);
    } else {
      setSelectedPatient(patient);
    }
  };

  return (
    <PatientContext.Provider value={{ selectedPatient, handleOnPressPatient }}>
      {children}
    </PatientContext.Provider>
  );
}

export function usePatient() {
  const context = useContext(PatientContext);
  if (context === undefined) {
    throw new Error("usePatient must be used within a PatientProvider");
  }
  return context;
}
