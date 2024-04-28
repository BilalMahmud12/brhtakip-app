import Recat from 'react';
import Link from 'next/link'

const Logo: Recat.FC = () => {
  return (
      <Link href={'/dashboard'}>
        <h1 className='text-lg  px-6 py-3'>
          <span className='text-white font-bold'>BRH</span>
          <span className='text-orange-400'>Takip.</span>
        </h1>
      </Link>
  )
}

export default Logo
