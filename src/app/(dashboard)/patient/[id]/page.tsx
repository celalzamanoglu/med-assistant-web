"use client";

import { PatientDetails } from "@/components";
import { mockPatients } from "@/constants/mocks";
import { useParams } from "next/navigation";

export default function PatientPage() {
  const { id } = useParams();
  const patient = mockPatients.find((p) => p.id === id);

  if (!patient) {
    return <div>Patient not found</div>;
  }

  return <PatientDetails patient={patient} />;
}
