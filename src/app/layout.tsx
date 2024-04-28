import type { Metadata } from "next";
import ConfigureAmplifyClientSide from '@/components/ConfigureAmplify'
import '@aws-amplify/ui-react/styles.css'

export const metadata: Metadata = {
  title: "BRH Takip Sistemi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <ConfigureAmplifyClientSide />
        {children}
      </body>
    </html>
  );
}