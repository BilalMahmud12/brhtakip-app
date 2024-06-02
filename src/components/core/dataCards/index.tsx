import React from 'react'
import { Request } from '@/API'

const DataCards: React.FC<{ 
    data: any[],
    handleEdit?: (data: any) => void;
    
}> = ({ data }) => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            {data.map((item) => (
                <div key={item.id} className='bg-white rounded-md shadow p-6'>

                </div>
            ))}
        </div>
    )
}

export default DataCards