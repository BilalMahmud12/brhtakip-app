import { useDataModal } from '@/contexts/DataModalContext';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';


const DataModal: React.FC = () => {
    const { isVisible, hideDataModal, content } = useDataModal();

    return (
        <Modal 
            isOpen={isVisible} 
            onClose={hideDataModal}
            radius="none"
            size="3xl"
            isDismissable={false}
        >
            <ModalContent>
                <ModalHeader className='border-b border-zinc-200 bg-zinc-100 py-3.5'>
                    {content?.header}
                </ModalHeader>
                <ModalBody className='py-3.5'>
                    {content?.body}
                </ModalBody>
                <ModalFooter className='border-t border-zinc-200 bg-zinc-200 py-2.5'>
                    {content?.footer}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DataModal;
