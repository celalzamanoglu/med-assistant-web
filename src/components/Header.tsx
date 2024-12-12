"use client";

import { UserMenu, ThemeSwitch } from "@components";

export function Header() {
  return (
    <header className="border-b border-divider bg-background">
      <div className="flex items-center justify-between px-6 h-16">
        <h1 className="text-xl font-bold text-default-foreground">
          MedAssistant
        </h1>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
