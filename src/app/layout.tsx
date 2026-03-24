import type { ReactNode } from 'react';
import '@/app/globals.css';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-text">
        {children}
      </body>
    </html>
  );
}
