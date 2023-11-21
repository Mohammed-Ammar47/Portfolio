"use client";
import React from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

export default function Provider({ children }: any) {
  return (
    <>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
      <Toaster position="top-right" richColors />
    </>
  );
}
