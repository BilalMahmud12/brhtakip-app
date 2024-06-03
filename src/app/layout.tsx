'use client';
import React from 'react';
import ConfigureAmplifyClientSide from '@/utils/ConfigureAmplify'
import { StoreProvider } from '../stores/utils/StoreProvider'
import { ThemeProvider } from '@aws-amplify/ui-react'
import { DataModalProvider } from '@/contexts/DataModalContext';
import DataModal from '@/components/core/dataModal';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Toaster } from 'sonner'
import theme from './theme';
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

            <ProgressBar
              height="3px"
              color="#f59e0b"
              options={{ showSpinner: true }}
              shallowRouting
            />

            <ThemeProvider theme={theme}>
              <DataModalProvider>
                {children}
                <DataModal />
                <Toaster 
                  position="top-right"
                  expand={true} 
                  richColors 
                />
              </DataModalProvider>
            </ThemeProvider>
          </body>

        </StoreProvider>
      </html>
  );
}