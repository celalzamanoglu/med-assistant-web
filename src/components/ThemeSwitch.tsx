"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";

import { SunIcon, MoonIcon } from "@components";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering anything until mounted
  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder with same dimensions
  }

  return (
    <div className="flex items-center">
      <Switch
        defaultSelected={theme === "light"}
        size="lg"
        color="primary"
        startContent={<SunIcon color="white" />}
        endContent={<MoonIcon />}
        onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
      />
    </div>
  );
}
