import { useDataModal } from '@/contexts/DataModalContext';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';


const DataModal: React.FC = () => {
    const { isVisible, hideDataModal, content } = useDataModal();

    return (
        <Modal 
            isOpen={isVisible} 
            onClose={hideDataModal}
            radius="lg"
            size="4xl"
            isDismissable={false}
            closeButton={customCloseButton(hideDataModal)}
            classNames={{
                closeButton: "top-4 right-4 rounded-lg bg-zinc-200 hover:bg-[#f59e0b] hover:text-white",
            }}
        >
            <ModalContent>
                <ModalHeader className='border-b border-zinc-200 bg-zinc-100 py-5'>
                    {content?.header}
                </ModalHeader>
                <ModalBody className='py-6'>
                    {content?.body}
                </ModalBody>
                <ModalFooter className='border-t border-zinc-200 bg-zinc-100 py-3.5'>
                    {content?.footer}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default DataModal;

const customCloseButton = (
    hideDataModal: () => void
) => {
    return (
        <button onClick={hideDataModal} className='block'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
    )
}