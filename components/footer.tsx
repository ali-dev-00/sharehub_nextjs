import React from "react";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils"; // Utility function to merge classes

interface FooterProps {
  className?: string; // Accept optional className prop
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("text-white text-center mt-12 py-6", className)}>
      <div className="container mx-auto space-y-2">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/ali-dev-00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mirza-ali-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} ShareHub. All rights reserved. Designed by{" "}
          <a
            href="https://github.com/alihaiderdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Ali Haider
          </a>
        </p>
      </div>
    </footer>
  );
}
