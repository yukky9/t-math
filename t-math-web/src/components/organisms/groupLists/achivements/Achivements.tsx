import React from 'react';
import FirstAchieve from '../../../molecules/lists/achivementsList/Achieve1/FirstAchieve'
import SecondAchieve from '../../../molecules/lists/achivementsList/Achieve2/SecondAchieve';
import ThirdAchieve from '../../../molecules/lists/achivementsList/Achieve3/ThirdAchieve';
import FourthAchieve from '../../../molecules/lists/achivementsList/Achieve4/FourthAchieve';
import FifthAchieve from '../../../molecules/lists/achivementsList/Achieve5/FifthAchieve';
import SixthAchieve from '../../../molecules/lists/achivementsList/Achieve6/SixthAchieve';
import SevenAchieve from '../../../molecules/lists/achivementsList/Achieve7/SevenAchieve';
import EighthAchieve from '../../../molecules/lists/achivementsList/Achieve8/EighthAchieve';
import NinthAchieve from '../../../molecules/lists/achivementsList/Achieve9/NinthAchieve';
import BackButton from '../../../molecules/imageButtons/backButton/BackButton';
import GeneralText from '../../../atoms/text/generalText/GeneralText';
import AddAchievementsButton from '../../../molecules/imageButtons/addButton/AddAchievementsButton';

const Achivements = () => {
    return (
        <div>
            <div className='mx-64 mt-20 flex gap-96'>
                <GeneralText title='Достижения'/>
                <a href='/'><BackButton text='Назад'/></a>
            </div>
            <div className='flex gap-52 mx-80 mt-10'>
                <div>
                    <FirstAchieve/>
                    <SecondAchieve/>
                    <ThirdAchieve/>
                    <FourthAchieve/>
                    <FifthAchieve/>
                </div>
                <div>
                    <SixthAchieve/>
                    <SevenAchieve/>
                    <EighthAchieve/>
                    <NinthAchieve/>
                    <AddAchievementsButton/>
                </div>
            </div>

        </div>
    );
};

export default Achivements;