'use client';
import React from 'react';
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import ConfigureAmplifyClientSide from '@/utils/ConfigureAmplify'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledRoot } from './StyledRoot';
import StoreProvider from './StoreProvider'
import { DataModalProvider } from '@/contexts/DataModalContext';
import DataModal from '@/components/core/dataModal';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Toaster } from 'sonner'
import '@aws-amplify/ui-react/styles.css'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Authenticator.Provider>
      
        <html lang="tr">
          <StoreProvider>
                <body>
                  <View>
                    <ConfigureAmplifyClientSide />
                    <ProgressBar
                      height="3px"
                      color="#1976d2"
                      options={{ showSpinner: false }}
                      shallowRouting
                    />

                    <AppRouterCacheProvider>
                        <DataModalProvider>

                          <StyledRoot>
                            {children}
                          </StyledRoot>

                          <DataModal />

                          <Toaster 
                            position="top-right"
                            expand={true} 
                            richColors 
                          />
                        </DataModalProvider>
                    </AppRouterCacheProvider>
                  </View>
                </body>
          </StoreProvider>
        </html>
      
    </Authenticator.Provider>
  );
}