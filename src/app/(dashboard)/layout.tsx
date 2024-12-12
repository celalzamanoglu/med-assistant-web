"use client";

import React from "react";
import { Header, PatientsList, SessionControls } from "@components";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null || !isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Left Section - 1/4 width */}
        <div className="w-1/4 border-r border-divider">
          {/* Split into two sections */}
          <div className="h-full flex flex-col">
            {/* Patients List - Top 3/4 */}
            <div className="flex-1 p-4 border-b border-divider">
              <PatientsList />
            </div>
            {/* Session Controls - Bottom 1/4 */}
            <div className="p-4">
              <SessionControls />
            </div>
          </div>
        </div>

        {/* Main Content - 3/4 width */}
        <div className="w-3/4">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
