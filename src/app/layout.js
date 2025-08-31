import "./globals.css";

// Importando fontes diretamente pelo next/font para melhor performance
import { Montserrat, Roboto } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-title',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

export const metadata = {
  title: "Kaoji Assistência Técnica",
  description: "Assistência e Soluções precisas e transparentes para notebooks e computadores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        {/* Futuramente, o Header e o Footer serão adicionados aqui */}
        <main>{children}</main>
      </body>
    </html>
  );
}