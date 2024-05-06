import ConfigureAmplifyClientSide from '@/components/ConfigureAmplify'
//import { usePathname } from "next/navigation"
//import { StoreProvider } from '../stores/StoreProvider'
import '@aws-amplify/ui-react/styles.css'
import './globals.css'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const path = '/'

  return (
      <html lang="tr">
          <body>
            <ConfigureAmplifyClientSide />
            {children}
          </body>
      </html>
  );
}