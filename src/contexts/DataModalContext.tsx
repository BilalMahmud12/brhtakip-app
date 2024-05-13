import { createContext, useContext, useState, ReactNode } from 'react';

interface DataModalContextType {
    showDataModal: (header: ReactNode, body: ReactNode, footer: ReactNode) => void;
    hideDataModal: () => void;
    content: {
        header: ReactNode;
        body: ReactNode;
        footer: ReactNode;
    } | null;
    isVisible: boolean;
}

const DataModalContext = createContext<DataModalContextType | undefined>(undefined);

export const DataModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [content, setContent] = useState<{
        header: ReactNode;
        body: ReactNode;
        footer: ReactNode;
    } | null>(null);

    const showDataModal = (header: ReactNode, body: ReactNode, footer: ReactNode) => {
        setContent({ header, body, footer });
        setIsVisible(true);
    };

    const hideDataModal = () => {
        setIsVisible(false);
    };

    return (
        <DataModalContext.Provider value={{ showDataModal, hideDataModal, content, isVisible }}>
            {children}
        </DataModalContext.Provider>
    );
};

export const useDataModal = () => {
    const context = useContext(DataModalContext);
    if (!context) throw new Error('useDataModal must be used within a DataModalProvider');
    return context;
};
