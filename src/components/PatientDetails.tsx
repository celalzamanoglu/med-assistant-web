"use client";

import { PatientHeader } from "./PatientHeader";
import { DiagnosisInfo } from "./DiagnosisInfo";
import { ProgressSummary } from "./ProgressSummary";
import { PastSessions } from "./PastSessions";
import { Patient } from "@/declarations";

interface PatientDetailsProps {
  patient: Patient;
}

export function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="space-y-6 w-full">
      <PatientHeader name={patient.name} />
      <DiagnosisInfo diagnosis={patient.diagnosis} />
      <ProgressSummary patientId={patient.id} />
      <PastSessions patientId={patient.id} />
    </div>
  );
}
