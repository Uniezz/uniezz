import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniezz',
  description: 'Uniezz', //add content description in future
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
