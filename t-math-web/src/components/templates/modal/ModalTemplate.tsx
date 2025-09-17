import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    Submit:() => void;
    children: any;
}

const ModalTemplate = ({ isOpen, onClose, Submit, children }:ModalProps) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 w-auto h-dvh -mt-20 my-auto text-center flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl w-auto">
                {children}
                <div className='flex gap-10'>
                    <button
                        className="mt-4 bg-yellow hover:bg-d-yellow text-white py-2 px-4 rounded"
                        onClick={Submit}>
                        Submit
                    </button>
                    <button
                        className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                        onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalTemplate;