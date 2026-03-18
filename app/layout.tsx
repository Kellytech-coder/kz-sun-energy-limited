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
          href="https://wa.me/9237391566?text=Hello%20Kz%20Sun%20Energy%20team%2C%20I%20have%20a%20question%20about%20your%20solar%20products!"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float float-animation fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 active:bg-green-700 shadow-xl rounded-full flex items-center justify-center text-white text-xl z-50 md:bottom-8 md:right-8 transition-all duration-300 hover:scale-110 active:scale-95 no-underline"
          aria-label="Chat on WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 01 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.86 11.86 0 0012.47 0C5.74.011 0.043 5.663 0 12.47a11.816 11.816 0 002.882 7.653l3.355.985-1.048 3.863 4.037-1.093 3.913.999a11.731 11.731 0 006.763 2.1c6.727 0 12.47-5.733 12.47-12.47 0-1.885-.346-3.654-.968-5.271a11.817 11.817 0 00-2.756-3.512z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}