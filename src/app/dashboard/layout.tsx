'use client'
import { usePathname } from "next/navigation"
import AppHeader from '@/components/custom/header';
import SideNav from "@/components/custom/sideNav";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const path = usePathname();
    console.log('path', path);

    return (
        <>
            <AppHeader />
            <div className="grid grid-cols-6 bg-[#f2f3f3]">
                <div className='col-span-1 bg-white'>
                    <SideNav />
                </div>
                <div className="col-span-5">
                    {children}
                </div>
            </div>
        </>
    );
}