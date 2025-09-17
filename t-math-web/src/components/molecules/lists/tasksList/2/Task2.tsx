import React from 'react';
import logo from "../../../../atoms/image/icons/root.png";
import TitleText from '../../../../atoms/text/tasksText/titleText/TitleText';
import EditThemeButton from '../../../imageButtons/editButton/EditThemeButton';

const Task2 = () => {
    return (
        <div className='bg-white h-20 border-2 border-light-body w-96 mb-7 py-2 px-4 rounded-2xl'>
            <div className='flex gap-44'>
                <div className='flex gap-5'>
                    <img className='rounded my-auto' src={logo} alt='achieve1'/>
                    <div>
                        <TitleText title='Корни'/>
                    </div>
                </div>
                <div className='my-auto mx-auto'>
                    <EditThemeButton/>
                </div>
            </div>
        </div>
    );
};

export default Task2;