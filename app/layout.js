import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ weight: ["400", "900"], subsets: ["latin"] });

export const metadata = {
  title: "Kelvin Kimani",
  description: "Softwatare Developer living in Kenya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
