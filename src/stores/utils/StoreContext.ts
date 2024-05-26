// src/stores/StoreContext.ts
import { createContext } from 'react';
import { RootStore } from '../RootStore';

export const StoreContext = createContext<RootStore | null>(null);
