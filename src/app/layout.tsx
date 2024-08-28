import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Plan4Labs",
  description: "Application web pour aider à la création de plannings efficients et équilibrés tout en économisant l'équivalent d'un ETP car le logiciel permet la chargement automatique, semaine après semaine, de plannifier les différents postes de travail automatiquement en fonction des compétences de chacun.",
  keywords: ["planning", "plannings", "schedule", "schedules", "scheduler", "lab", "laboratoire", "laboratory"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          {children}</body>
    </html>
  );
}
