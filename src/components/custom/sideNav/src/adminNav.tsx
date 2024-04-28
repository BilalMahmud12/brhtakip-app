import React from 'react'
import Link from 'next/link'
import { Divider } from '@aws-amplify/ui-react';

const navigation = [
    { name: 'Talepler', href: '/requests' },
    { name: 'Markalar', href: '/brands' },
    { name: 'Mağazalar', href: '/branches' },
    { name: 'Ürün İşlemler', href: '/products' },
]

const AdminNavigation: React.FC = () => {
    return (
        <div className=''>
            <ul className='space-y-3'>
                {navigation.map((item, index) => (
                    <div key={`${item.name}-${index}`}>
                        <li >
                            <Link 
                                href={item.href}
                                className='block mb-2 font-medium text-gray-500 hover:text-gray-800 transition-all ease-in-out duration-300' 
                            >
                                <div className=''>
                                    <span>{item.name}</span>
                                </div>
                            </Link>
                        </li>
                        <Divider orientation="horizontal" size="small" borderColor={'#dedede'} />
                    </div>
                ))}
            </ul>
            
        </div>
    )
}

export default AdminNavigation