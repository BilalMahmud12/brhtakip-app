'use client'

import { useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import AppHeader from '@/components/custom/header';
import SideNav from "@/components/custom/sideNav";
import { useStore } from '@/stores/useStore';
import { requests } from '@/data';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { requestStore } = useStore();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    
    useEffect(() => {
        requestStore.setRequests(requests);
    }, []);
    
    return (
        <>
            <AppHeader />
            <div className="grid grid-cols-5 xl:grid-cols-6 bg-[#f2f3f3]">
                <div className='col-span-1 bg-white'>
                    <SideNav />
                </div>
                <div className="col-span-4 xl:col-span-5">
                    <div className='px-8 py-1.5'>
                        {children}
                    </div>
                </div>
            </div>
            
        </>
    );
}