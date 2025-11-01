"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until the component mounts to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // don't render until on client

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon /> : <SunIcon />}
    </Button>
  );
}
