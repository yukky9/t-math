import React from 'react';
import GeneralText from '../../atoms/text/generalText/GeneralText';
import BackButton from '../../molecules/imageButtons/backButton/BackButton';

const StatisticsMain = () => {
    return (
        <div>
            <div className='mx-64 mt-20 flex gap-56'>
                <GeneralText title='Статистические данные'/>
                <a href='/'><BackButton text='Назад'/></a>
            </div>
        </div>
    );
};

export default StatisticsMain;