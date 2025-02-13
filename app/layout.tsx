import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StarryBackground } from "@/components/starry-background";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShareHub - Your Personal Data Saver",
  description: "Save and share your files securely with ShareHub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <StarryBackground />
          <div className="relative min-h-screen">
            <Navbar /> {/* Home Navbar */}
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Footer /> {/* Footer */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
