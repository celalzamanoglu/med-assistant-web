"use client";

import { Input, Avatar, Button } from "@nextui-org/react";
import { PlusIcon, SearchIcon } from "@components";

// Mock data for patients
const mockPatients = [
  { id: 1, name: "Ayşe Kaya", avatar: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Mehmet Demir", avatar: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Fatma Yılmaz", avatar: "https://i.pravatar.cc/150?u=3" },
  // Add more mock patients...
];

export function PatientsList() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-default-900">Hastalar</h2>
        <Button
          size="sm"
          color="primary"
          startContent={<PlusIcon color="white" className="w-4 h-4" />}
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
          <button
            key={patient.id}
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-default-100 transition-colors"
          >
            <Avatar src={patient.avatar} size="sm" />
            <span className="text-sm text-default-900">{patient.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
