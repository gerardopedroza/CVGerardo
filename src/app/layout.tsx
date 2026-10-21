import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gerardo Pedroza | Desarrollo de Negocios y Servicios Financieros',
  description: 'CV y portfolio de Gerardo Pedroza: 17+ años en servicios financieros, banca, pagos y desarrollo de negocios B2B. Experiencia en prospección, clientes, propuestas y consultoría con Banorte, Mercado Pago, Banco Azteca y Santander.',
  keywords: [
    'Gerardo Pedroza',
    'Senior Business Development Manager',
    'Business Development',
    'Client Relationship Management',
    'Banking',
    'Payments',
    'FinTech',
    'Digital Transformation',
    'Proposal Development',
    'Salesforce',
    'HIVE',
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
    description: '17+ años en servicios financieros y desarrollo de negocios B2B en México y América Latina.',
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
