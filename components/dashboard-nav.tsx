"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Folder, LogOut, ChevronLeft, ChevronRight } from "lucide-react";

export function DashboardNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-24" : "w-48"
      } transition-all duration-300 border-r h-screen p-4 flex flex-col justify-between`}
    >
      {/* Navigation Links */}
      <nav className="space-y-2">
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent w-full"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          {!isCollapsed && <span>Collapse</span>}
        </button>

        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent"
        >
          <Home className="w-4 h-4" />
          {!isCollapsed && <span>Home</span>}
        </Link>
        <Link
          href="/dashboard/folders"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent"
        >
          <Folder className="w-4 h-4" />
          {!isCollapsed && <span>Folders</span>}
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="space-y-2">
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent w-full"
        >
          <LogOut className="w-4 h-4" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
