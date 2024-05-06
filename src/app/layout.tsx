'use client';
import ConfigureAmplifyClientSide from '@/utils/ConfigureAmplify'
import { StoreProvider } from '../stores/StoreProvider'
import '@aws-amplify/ui-react/styles.css'
import './globals.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="tr">
        <StoreProvider>
          <body>
            <ConfigureAmplifyClientSide />
            {children}
          </body>
        </StoreProvider>
      </html>
  );
}