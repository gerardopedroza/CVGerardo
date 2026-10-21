import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cvgerardo.pages.dev'),
  title: 'Gerardo Pedroza | Senior Business Development Manager - Financial Services',
  description: 'CV y portfolio de Gerardo Pedroza: 17+ años en banca y servicios financieros, con experiencia en desarrollo de negocios B2B, apertura de oportunidades, asesoría consultiva, propuestas y coordinación multidisciplinaria.',
  keywords: [
    'Gerardo Pedroza',
    'Senior Business Development Manager',
    'Business Development',
    'B2B Sales',
    'Market Development',
    'Financial Services',
    'Strategic Account Management',
    'Consultative Selling',
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
    url: 'https://cvgerardo.pages.dev/',
    title: 'Gerardo Pedroza | Senior Business Development Manager',
    description: '17+ años en banca y servicios financieros: prospección B2B, desarrollo de mercado, propuestas consultivas y coordinación de iniciativas en América Latina.',
    siteName: 'Gerardo Pedroza - Portfolio Profesional',
    images: [{
      url: '/og-gerardo.png?v=2',
      width: 1200,
      height: 630,
      alt: 'Gerardo Pedroza, Senior Business Development Manager en servicios financieros',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gerardo Pedroza | Senior Business Development Manager',
    description: 'Desarrollo de negocios, apertura de mercado y servicios financieros.',
    images: ['/og-gerardo.png?v=2'],
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
