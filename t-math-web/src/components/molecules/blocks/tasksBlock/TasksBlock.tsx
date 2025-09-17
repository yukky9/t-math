import React from 'react';
import TransitionButton from '../../../atoms/buttons/transition/TransitionButton';
import logo from '../../../atoms/image/general/task.png';
import CardText from '../../../atoms/text/generalText/CardText';

const TasksBlock = () => {
    return (
        <div className='bg-white shadow-2xl border-2 border-blue max-w-sm py-2 px-4 text-center rounded-2xl'>
            <img className='rounded-2xl w-72 mx-auto' src={logo} alt='tasks'/>
            <CardText title='Темы заданий'/>
            <a href='/tasks'><TransitionButton text='Перейти'/></a>
        </div>
    );
};

export default TasksBlock;