import React from 'react'

const Logo: React.FC = () => {
    return (
        <h1 className='text-3xl font-bold pl-3 flex items-center'>
            <span className='text-black font-light'>BRH</span>
            <span className='text-red-500'>Takip.</span>
            <span className='block ml-1.5 mr-2 font-bold text-4xl'>&#10148;</span>
        </h1>
    )
}

export default Logo
