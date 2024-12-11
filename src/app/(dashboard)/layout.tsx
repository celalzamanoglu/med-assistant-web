"use client";

import React from "react";
import { Header, DrawerNavigation } from "@components";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();

  // Show nothing until we know the authentication state
  if (isAuthenticated === null) {
    return null;
  }

  // If not authenticated, the useAuth hook will handle the redirect
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex">
      <DrawerNavigation />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
