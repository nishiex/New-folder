import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArcadeLX | Move different",
  description: "The next-generation motion-sensing gaming kiosk.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
