import React, {useState} from 'react';
import logo from '../../../../atoms/image/achivements/1.png';
import NameText from "../../../../atoms/text/achivementsText/nameText/NameText";
import DescriptionText from "../../../../atoms/text/achivementsText/descriptionText/DescriptionText";
import EditAchievementsButton from "../../../../molecules/imageButtons/editButton/EditAchievementsButton";


const FirstAchieve = () => {
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
        <div className='bg-white h-20 border-2 border-light-body w-96 mb-7 py-2 px-4 rounded-2xl'>
            <div className='flex gap-5'>
                <img className='rounded my-auto' src={logo} alt='achieve1'/>
                <div>
                    <NameText name='Достижение №1'/>
                    <DescriptionText description='Решите 10 задач'/>
                </div>
                <div className='my-auto mx-auto'>
                    <EditAchievementsButton/>
                </div>
            </div>
        </div>
    );
};

export default FirstAchieve;