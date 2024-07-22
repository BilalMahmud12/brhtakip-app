import React from 'react';
import useAuthorization from '@/hooks/useAuthorization';

const WithAuthorization = (requiredPermissions: string[]) => (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        useAuthorization(requiredPermissions);

        return <WrappedComponent {...props} />;
    };
};

export default WithAuthorization;
