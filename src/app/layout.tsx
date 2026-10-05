import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gerardo Pedroza | Líder en Desarrollo de Productos Financieros, Pagos & FinTech',
  description: 'CV y Portfolio Digital Ejecutivo de Gerardo Pedroza. 17+ años de experiencia en banca, pagos, inclusión financiera y transformación digital con Citi, Visa, Compartamos, Azteca y consultoría con Santander y Mercado Pago.',
  keywords: [
    'Gerardo Pedroza',
    'Financial Products Leader',
    'Product Management',
    'Product Owner',
    'Banking',
    'Payments',
    'FinTech',
    'Digital Transformation',
    'Women-Centered Design',
    'Artificial Intelligence in Banking',
    'Visa',
    'Citibank',
    'Compartamos Banco',
    'Banco Azteca',
    'CDMX',
    'Mexico',
  ],
  authors: [{ name: 'Gerardo Pedroza', url: 'https://www.linkedin.com/in/gerardo-pedroza-06a1a07/' }],
  creator: 'Gerardo Pedroza',
  openGraph: {
    type: 'profile',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    url: 'https://gerardopedroza.com',
    title: 'Gerardo Pedroza | Executive Digital CV & Portfolio',
    description: '17+ años liderando desarrollo de productos financieros, pagos y transformación digital en México y América Latina.',
    siteName: 'Gerardo Pedroza - Portfolio Profesional',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-screen selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
