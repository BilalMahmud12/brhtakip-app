import React from 'react';
import useAuthorization from '@/hooks/useAuthorization';

type WithAuthorizationProps = {
    children: React.ReactNode;
    requiredPermissions: string[];
};

const withAuthorization = (requiredPermissions: string[]) => (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        useAuthorization(requiredPermissions);

        return <WrappedComponent {...props} />;
    };
};

export default withAuthorization;
