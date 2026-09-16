import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeanbrunoadv.com.br"),
  title: "Dr. Jean Bruno | Advogado Criminalista e Cível - OAB/AM 17.710",
  description:
    "Defesa criminal estratégica, Tribunal do Júri, Execução Penal, Progressão de Regime, Audiência de Custódia e Direito Cível em Manaus/AM. Atendimento humanizado e plantão de urgência.",
  keywords: [
    "Advogado Criminalista Manaus",
    "Dr Jean Bruno",
    "Tribunal do Júri Manaus",
    "Execução Penal Manaus",
    "Progressão de Regime",
    "Audiência de Custódia Manaus",
    "Advogado OAB AM 17710",
    "Advocacia Criminal Amazonas",
    "Direito Cível Manaus",
  ],
  authors: [{ name: "Dr. Jean Bruno" }],
  openGraph: {
    title: "Dr. Jean Bruno | Advogado Criminalista e Cível - OAB/AM 17.710",
    description:
      "Defesa criminal técnica, combativa e humanizada. Atendimento de urgência e consultoria jurídica em Manaus/AM.",
    url: "https://jeanbrunoadv.com.br",
    siteName: "Dr. Jean Bruno Advocacia",
    images: [
      {
        url: "/perfil.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Jean Bruno Advogado",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${cinzel.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF8F5] text-[#181B20] antialiased selection:bg-[#DFB76C] selection:text-[#181B20]">
        {children}
      </body>
    </html>
  );
}
