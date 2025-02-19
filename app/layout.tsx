"use client";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StarryBackground } from "@/components/starry-background";
import "./globals.css";
import { usePathname } from "next/navigation"; // Import usePathname to detect the route

const inter = Inter({ subsets: ["latin"] });

console.log("using app layout");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Detect if the current page is part of "dashboard"
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <StarryBackground />
           <Navbar />
          <div className="relative min-h-screen">
            {isDashboard ? children : <main className="container mx-auto px-4 py-8">{children}</main>}
          </div>
          <Footer className={isDashboard ? "border-t !mt-0" : ""} />
        </ThemeProvider>
      </body>
    </html>
  );
}
