"use client";

import React, { useState } from "react";
import {
  Header,
  PatientsList,
  SessionControls,
  SessionDrawer,
} from "@components";
import { useAuth } from "@/hooks/useAuth";
import { useDisclosure, Link } from "@nextui-org/react";

type DrawerMode = "record" | "manual";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [drawerMode, setDrawerMode] = useState<DrawerMode>("record");

  if (isAuthenticated === null || !isAuthenticated) {
    return null;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <div className="w-1/4 border-r border-divider flex flex-col">
            <div className="p-4 border-b border-divider">
              <SessionControls onOpen={onOpen} onModeChange={setDrawerMode} />
            </div>
            <div className="flex-1 p-4 overflow-auto">
              <PatientsList />
            </div>
          </div>
          <div className="w-3/4">
            <main className="p-6">{children}</main>
          </div>
        </div>
        <div className="fixed bottom-4 left-4">
          <Link
            href="mailto:support@medassistant.com"
            className="text-sm text-default-500 hover:text-primary transition-colors"
          >
            Destek veya bildirimlerinizi
            <span className="font-semibold mx-1 text-primary">buradan</span>
            bize iletebilirsiniz
          </Link>
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
