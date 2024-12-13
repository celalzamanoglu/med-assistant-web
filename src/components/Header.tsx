"use client";

import { UserMenu, ThemeSwitch } from "@components";

export function Header() {
  return (
    <header className="border-b border-divider bg-background">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-default-foreground">
            MedAssistant
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
