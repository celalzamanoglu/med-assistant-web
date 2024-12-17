"use client";

import React, { useState } from "react";
import {
  Header,
  PatientsList,
  SessionControls,
  SessionDrawer,
} from "@components";
import { useAuth } from "@/hooks/useAuth";
import { useDisclosure } from "@nextui-org/react";
import { PatientProvider, usePatient } from "@/contexts/PatientContext";

type DrawerMode = "record" | "manual";

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [drawerMode, setDrawerMode] = useState<DrawerMode>("record");
  const { selectedPatient, handleOnPressPatient } = usePatient();

  if (isAuthenticated === null || !isAuthenticated) {
    return null;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Mobile Controls */}
        <div className="md:hidden border-b border-divider">
          <div className="p-4">
            <SessionControls onOpen={onOpen} onModeChange={setDrawerMode} />
          </div>
          <div className="px-4 pb-4">
            <PatientsList
              layout="horizontal"
              selectedPatientId={selectedPatient?.id}
              onPatientSelect={handleOnPressPatient}
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-1">
          <div className="w-1/4 border-r border-divider flex flex-col">
            <div className="p-4 border-b border-divider">
              <SessionControls onOpen={onOpen} onModeChange={setDrawerMode} />
            </div>
            <div className="flex-1 p-4 overflow-auto">
              <PatientsList
                layout="vertical"
                selectedPatientId={selectedPatient?.id}
                onPatientSelect={handleOnPressPatient}
              />
            </div>
          </div>
          <div className="w-3/4">
            <main className="p-6">{children}</main>
          </div>
        </div>

        {/* Mobile Main Content */}
        <div className="md:hidden flex-1">
          <main className="p-4">{children}</main>
        </div>
      </div>
      <SessionDrawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        mode={drawerMode}
      />
    </>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PatientProvider>
      <DashboardContent>{children}</DashboardContent>
    </PatientProvider>
  );
}
