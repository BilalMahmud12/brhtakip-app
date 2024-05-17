'use client'
import AppHeader from '@/components/custom/header';
import SideNav from "@/components/custom/sideNav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <AppHeader />
            <div className="grid grid-cols-5 xl:grid-cols-6 bg-[#f2f3f3]">
                <div className='col-span-1 bg-white'>
                    <SideNav />
                </div>
                <div className="col-span-4 xl:col-span-5">
                    <div className='px-8 py-4'>
                        {children}
                    </div>
                </div>
            </div>
            
        </>
    );
}