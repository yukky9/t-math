import React from 'react';
import GeneralText from '../../../atoms/text/generalText/GeneralText';
import AddThemeButton from '../../../molecules/imageButtons/addButton/AddThemeButton';
import BackButton from '../../../molecules/imageButtons/backButton/BackButton';
import Task1 from '../../../molecules/lists/tasksList/1/Task1';
import Task10 from '../../../molecules/lists/tasksList/10/Task10';
import Task11 from '../../../molecules/lists/tasksList/11/Task11';
import Task12 from '../../../molecules/lists/tasksList/12/Task12';
import Task2 from '../../../molecules/lists/tasksList/2/Task2';
import Task3 from '../../../molecules/lists/tasksList/3/Task3';
import Task4 from '../../../molecules/lists/tasksList/4/Task4';
import Task5 from '../../../molecules/lists/tasksList/5/Task5';
import Task6 from '../../../molecules/lists/tasksList/6/Task6';
import Task7 from '../../../molecules/lists/tasksList/7/Task7';
import Task8 from '../../../molecules/lists/tasksList/8/Task8';
import Task9 from '../../../molecules/lists/tasksList/9/Task9';

const Tasks = () => {
    return (
        <div>
            <div className='mx-64 mt-20 flex gap-96'>
                <GeneralText title='Темы заданий'/>
                <a href='/'><BackButton text='Назад'/></a>
            </div>
            <div className='flex gap-52 mx-80 mt-10'>
                <div>
                    <Task1/>
                    <Task2/>
                    <Task3/>
                    <Task4/>
                    <Task5/>
                    <Task6/>
                </div>
                <div>
                    <Task7/>
                    <Task8/>
                    <Task9/>
                    <Task10/>
                    <Task11/>
                    <Task12/>
                    <AddThemeButton/>
                </div>
            </div>
        </div>
    );
};

export default Tasks;