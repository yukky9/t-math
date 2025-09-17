import React, {useState} from 'react';
import addBt from "../../../atoms/image/icons/Group_62.png";
import NameInputs from '../../../atoms/inputs/NameInputs';
import TypeThemeInput from '../../../atoms/inputs/TypeThemeInput';
import CardText from '../../../atoms/text/generalText/CardText';
import ModalTemplate from '../../../templates/modal/ModalTemplate';
import Drag from '../../drag/Drag';


const AddThemeButton = () => {
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
            <button onClick={openModal}
                    className="w-96 h-20 mb-20 p-3 hover:bg-d-yellow hover:text-black bg-grey py-2 px-4 border-2 border-dark-blue hover:border-dark-gold rounded-xl">
                <img className='mx-auto' src={addBt} alt='add'/>
            </button>
            <ModalTemplate isOpen={isModalOpen} onClose={closeModal} Submit={submitModal}>
                <div className='flex gap-5'>
                    <Drag/>
                    <div>
                        <CardText title="Создать тему"/>
                        <TypeThemeInput/>
                        <NameInputs/>
                    </div>
                </div>
            </ModalTemplate>
        </div>
    );
};

export default AddThemeButton;