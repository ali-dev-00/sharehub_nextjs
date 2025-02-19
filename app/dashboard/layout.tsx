"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { StarryBackground } from "@/components/starry-background";
import { DashboardNav } from "@/components/dashboard-nav";

console.log("Using dashboard layout");


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
      <div className="flex ">
        <DashboardNav />
        <main className="flex-1 p-6">{children}</main>
      </div>
   
  );
}
