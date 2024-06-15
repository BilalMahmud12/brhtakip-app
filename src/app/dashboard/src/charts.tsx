import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { date: 'Ocak', requests: 30 },
    { date: 'Şubat', requests: 50 },
    { date: 'Mart', requests: 20 },
];

const Charts: React.FC = () => {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                <div className='bg-white px-6 py-4 rounded-2xl shadow'>
                    <div className='mb-2'>
                        <span className='text-sm'>Zaman İçinde Talep Hacmi - 3 Aylık</span>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <Tooltip />
                            <Area type="monotone" dataKey="requests" stroke="#F44336" fill="#F44336" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className='bg-white px-6 py-4 rounded-2xl shadow'>
                    <div className='mb-2'>
                        <span className='text-sm'>Zaman İçinde Talep Hacmi - 3 Aylık</span>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <Tooltip />
                            <Area type="monotone" dataKey="requests" stroke="#F44336" fill="#F44336" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className='bg-white px-6 py-4 rounded-2xl shadow'>
                    <div className='mb-2'>
                        <span className='text-sm'>Zaman İçinde Talep Hacmi - 3 Aylık</span>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <Tooltip />
                            <Area type="monotone" dataKey="requests" stroke="#F44336" fill="#F44336" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Charts