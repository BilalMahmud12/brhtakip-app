import React from 'react'
import CreateOrUpdateForm from './createOrUpdateForm'

const UserCreateView: React.FC = () => {
    return (
        <div className='h-full'>
            <div className='p-6 bg-white shadow'>
                <CreateOrUpdateForm isCreate={true} />
            </div>
        </div>
    )
}

export default UserCreateView