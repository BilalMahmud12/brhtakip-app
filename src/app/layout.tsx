'use client'
import ConfigureAmplifyClientSide from '@/components/ConfigureAmplify'
import { usePathname } from "next/navigation"
import '@aws-amplify/ui-react/styles.css'
import './globals.css'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const path = usePathname();


  return (
    <html lang="tr">
        <body>
            {path === '/' && (
              <div className="flex items-center justify-center">
                    <div className="bg-white">
                      <h1 className='text-3xl font-bold px-6 py-3'>
                        <span className='text-black'>BRH</span>
                        <span className='text-red-500'>Takip.</span>
                      </h1>
                      
                    </div>
                </div>            
            )}
          {children}
          <ConfigureAmplifyClientSide />
        </body>
    </html>
  );
}