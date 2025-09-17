import React from 'react';
import TransitionButton from '../../../atoms/buttons/transition/TransitionButton';
import logo from '../../../atoms/image/general/statistics.png';
import CardText from '../../../atoms/text/generalText/CardText';

const StatisticsBlock = () => {
    return (
        <div className='bg-white shadow-2xl border-2 border-yellow max-w-sm min-h-96 py-12 px-4 text-center rounded-2xl'>
            <img className='rounded-2xl h-auto w-80 mx-auto mb-5' src={logo} alt='statistic'/>
            <CardText title='Статистика'/>
            <div className='-mb-5'>
                <a href='/statistics'><TransitionButton text='Перейти'/></a>
            </div>
        </div>
    );
};

export default StatisticsBlock;