"use client";

import React from "react";

export function Loader() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      <p className="text-white text-xl font-semibold mt-4">Loading...</p>
    </div>
  );
}
