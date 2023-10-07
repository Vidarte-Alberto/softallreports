import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoftAllReports",
  description: "App Create By Allit MX - Vidarte Alberto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="ligth">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
