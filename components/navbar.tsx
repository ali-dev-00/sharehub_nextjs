"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // Import button from shadcn
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* <ModeToggle/> */}
        <Link href="/" className="text-2xl font-bold">
          ShareHub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`text-sm px-3 py-1 transition-all ${
                  pathname === item.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
              {/* Bottom border animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* Desktop "Get Login" Button */}
        <div className="hidden md:block">
          <Button variant="outline" className="px-4 py-2">
            Start Managing
          </Button>
        </div>

        {/* Mobile View: "Get Login" button & Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Button variant="outline" className="px-3 py-1 text-sm">
            Get Login
          </Button>
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-8 h-8 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <button
          className="absolute top-6 left-6 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col items-center space-y-8 text-2xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-1 text-white text-2xl transition-all group"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              {/* Bottom border animation for mobile */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
