// src/stores/StoreProvider.tsx
import { FC, ReactNode } from 'react';
import { RootStore } from '../RootStore';
import { StoreContext } from './StoreContext';

const store = new RootStore();

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
