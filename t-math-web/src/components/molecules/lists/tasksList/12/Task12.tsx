import React from 'react';
import TitleText from '../../../../atoms/text/tasksText/titleText/TitleText';
import EditThemeButton from '../../../imageButtons/editButton/EditThemeButton';

const Task12 = () => {
    return (
        <div className='bg-white h-20 border-2 border-light-body w-96 mb-7 py-2 px-4 rounded-2xl'>
            <div className='flex gap-44'>
                <div>
                    <TitleText title='YandexGPT'/>
                </div>
                <div className='my-auto mx-auto'>
                    <EditThemeButton/>
                </div>
            </div>
        </div>
    );
};

export default Task12;