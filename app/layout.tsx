import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Fyvi Soluções Tecnológicas | Automação, Design e Presença Digital", description: "Soluções em automação, redesign para delivery, sites e presença digital para impulsionar seu negócio." };
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
