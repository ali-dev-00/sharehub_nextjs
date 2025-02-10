

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { StarryBackground } from "@/components/starry-background";
import { DashboardNav } from "@/components/dashboard-nav";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard - ShareHub",
  description: "Manage your files and folders in the dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <StarryBackground />
          <div className="flex min-h-screen">
            <DashboardNav /> {/* Sidebar Navigation */}
            <main className="flex-1 p-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
