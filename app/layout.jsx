
// UI
import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


// Leatflet necesita su archivo css para renderizarse
import "leaflet/dist/leaflet.css";


// Componentes Propios
import Nav from "./ui/nav/Nav";
import Footer from "./ui/footer/Footer";


// Metadata
export const metadata = { title: "Valentino Privitera - Coding Challenge", description: "Food-Truck Finder in Next.js" };


/* MAIN */
export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <Nav />

        {children}  {/* Home */}

        <Footer />
        
      </body>

    </html>
  );
}