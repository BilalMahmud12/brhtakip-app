'use client';
import React, { useEffect } from 'react';
import ConfigureAmplifyClientSide from '@/utils/ConfigureAmplify'
import { StoreProvider } from '../stores/utils/StoreProvider'
import { ThemeProvider } from '@aws-amplify/ui-react'
import { DataModalProvider } from '@/contexts/DataModalContext';
import DataModal from '@/components/core/dataModal';
import NextTopLoader from 'nextjs-toploader';
import theme from './theme';
import '@aws-amplify/ui-react/styles.css'
import './globals.css'

import { client } from '@/repository';
import { listClientProfiles } from '@/graphql/queries';
import { useStore } from '@/stores/utils/useStore';

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

            <NextTopLoader
              color="#f59e0b"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />

            <ThemeProvider theme={theme}>
              <DataModalProvider>
                <DataModal />
                {children}
              </DataModalProvider>
            </ThemeProvider>
          </body>

        </StoreProvider>
      </html>
  );
}