import React from "react";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className=" text-white text-center mt-12 py-6">
      <div className="container mx-auto space-y-2">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/alihaiderdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/alihaiderdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/1234567890" // Replace with your WhatsApp link
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
