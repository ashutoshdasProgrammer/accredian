import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Accredian Enterprise | Build capability that moves business forward',
  description:
    'Tailored enterprise learning and capability-building programs for teams building what is next.',
  keywords: [
    'enterprise learning',
    'corporate training',
    'leadership development',
    'upskilling',
    'skill transformation',
  ],
  openGraph: {
    title: 'Accredian Enterprise',
    description:
      'Build the capabilities that make change stick.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accredian Enterprise',
    description:
      'Build the capabilities that make change stick.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}