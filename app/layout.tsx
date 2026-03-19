import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Kz_Sun_Energy_Limited",
  description: "Reliable solar and electronics equipment for homes & businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-body bg-gray-50`}
      >
        {children}
        <a
          href="https://wa.me/2349037391566?text=Hello%20Kz%20Sun%20Energy%20team%2C%20I%20have%20a%20question%20about%20your%20solar%20products!"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float float-animation fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 active:bg-green-700 shadow-xl rounded-full flex items-center justify-center text-white text-xl z-50 md:bottom-8 md:right-8 transition-all duration-300 hover:scale-110 active:scale-95 no-underline"
          aria-label="Chat on WhatsApp"
        >
          <img src="/whatsapp-icon.svg" alt="WhatsApp" width="28" height="28" className="drop-shadow-md" />
        </a>
      </body>
    </html>
  );
}