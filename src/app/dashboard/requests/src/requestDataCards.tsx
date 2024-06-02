import React from 'react'
import RequestCard from './requestCard'

const RequestDataCards: React.FC<{ data: any[] }> = ({ data }) => {

    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {data.map((item) => (
                    <div key={item.id}>
                        <RequestCard data={item} />
                    </div>
                ))}
            </div>            
        </div>
    )
}

export default RequestDataCards