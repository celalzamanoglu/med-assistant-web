"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

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
        defaultSelected={theme === "dark"}
        size="lg"
        color="primary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
}
