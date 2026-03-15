import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'manubIA | Clareza financeira para sua família',
  description:
    'O ManubIA ajuda sua família a acompanhar gastos, organizar prioridades e tomar decisões financeiras com mais tranquilidade.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
