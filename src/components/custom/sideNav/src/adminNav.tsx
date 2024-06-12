import React from 'react'
import Link from 'next/link'
import { Divider } from '@aws-amplify/ui-react';
import Icon from '@/components/core/icon'
import { adminNavItems, clientNavItems } from '@/config/navigation';

const AdminNavigation: React.FC = () => {
    return (
        <div className=''>
            <div className='space-y-3'>
                {adminNavItems.map((navGroup, index) => (
                    <div key={`${navGroup.section_name}-${index}`}>
                        {navGroup.show_title && (
                            <div className='text-gray-400 font-medium text-xs px-4 py-2'>{navGroup.section_title}</div>
                        )}

                        <ul className=''>
                            {navGroup.items.map((item, index) => (
                                <li key={`${item.name}-${index}`}>
                                    <Link 
                                        href={item.href}
                                        className='block px-5 py-2 text-gray-500 hover:text-gray-800 hover:bg-zinc-100 transition-all ease-in-out duration-300' 
                                    >
                                        <div className='flex items-center space-x-2'>
                                            <span>
                                                <Icon iconName={item.icon} className='text-xl' />
                                            </span>
                                            <span className='text-sm font-medium'>{item.name}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Divider orientation="horizontal" size="small" borderColor={'#dedede'} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminNavigation