import React, {useState} from 'react';
import editBt from "../../../atoms/image/icons/edit.png";
import EditInputs from '../../../atoms/inputs/EditInputs';
import CardText from '../../../atoms/text/generalText/CardText';
import ModalTemplate from '../../../templates/modal/ModalTemplate';
import Drag from '../../drag/Drag';
import image from "../../../atoms/image/icons/arithmetic.png";
import DeleteButton from '../../../atoms/buttons/delete/DeleteButton';

const EditThemeButton = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const submitModal = () => {
        setModalOpen(false);
    };
    return (
        <div>
            <button onClick={openModal}>
                <img src={editBt} alt='edit'/>
            </button>
            <ModalTemplate isOpen={isModalOpen} onClose={closeModal} Submit={submitModal}>
                <div className='flex gap-10'>
                    <div className='my-auto mt-28'>
                        <img className='w-36 h-36 border border-yellow rounded-xl' src={image} alt='image'/>
                    </div>
                    <div>
                        <CardText title="Редактировать тему"/>
                        <Drag/>
                        <EditInputs/>
                        <DeleteButton text='Delete'/>
                    </div>
                </div>
            </ModalTemplate>
        </div>
    );
};

export default EditThemeButton;