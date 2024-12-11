"use client";

import { UserMenu, ThemeSwitch } from "@components";

export function Header() {
  return (
    <header className="border-b border-divider bg-background">
      <div className="flex items-center justify-end px-6 h-16 gap-4">
        <ThemeSwitch />
        <UserMenu />
      </div>
    </header>
  );
}
