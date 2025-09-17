import React from 'react';
import logo from "../../../../atoms/image/achivements/6.png";
import DescriptionText from '../../../../atoms/text/achivementsText/descriptionText/DescriptionText';
import NameText from '../../../../atoms/text/achivementsText/nameText/NameText';
import EditAchievementsButton from "../../../../molecules/imageButtons/editButton/EditAchievementsButton";

const SixthAchieve = () => {
    return (
        <div className='bg-white h-20 border-2 border-light-body w-96 mb-7 py-2 px-4 rounded-2xl'>
            <div className='flex gap-5'>
                <img className='rounded my-auto' src={logo} alt='achieve1'/>
                <div>
                    <NameText name='Достижение №6'/>
                    <DescriptionText description='Выиграйте у Yandex GPT'/>
                </div>
                <div className='my-auto mx-auto'>
                    <EditAchievementsButton/>
                </div>
            </div>
        </div>
    );
};

export default SixthAchieve;