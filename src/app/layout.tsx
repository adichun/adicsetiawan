import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/BootstrapClient.js";
import Navbar from "./templates/Navbar.js";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Adi Chandra Setiawan",
  description: "Web Portfolio",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        data-spy="scroll"
        data-target=".navbar"
        data-offset="40"
        id="home"
        style={{ backgroundColor: "#fff" }}
        // data-target=".navbar"
        // data-offset="40"
        // data-spy="scroll"
      >
        <div className="container mx-auto">
          <Navbar />
          {children}
          <BootstrapClient />
          {/* <footer>Im Footer</footer> */}
        </div>
      </body>
    </html>
  );
}
