import Recat from 'react';
import Link from 'next/link'

const Logo: Recat.FC = () => {
  return (
    <Link href={'/dashboard'} className='px-6 py-3 bg-zinc-800 w-full'>
      <h1 className='text-2xl'>
        <span className='text-white font-bold'>BRH</span>
        <span className='text-orange-400'>Takip.</span>
      </h1>
    </Link>
  )
}

export default Logo
