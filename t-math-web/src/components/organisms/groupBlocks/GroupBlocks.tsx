import React from 'react';
import AchievementsBlock from '../../molecules/blocks/achiveBlock/AchievementsBlock';
import StatisticsBlock from '../../molecules/blocks/statisticsBlock/StatisticsBlock';
import TasksBlock from '../../molecules/blocks/tasksBlock/TasksBlock';

const GroupBlocks = () => {
    return (
        <div className='mt-20 ml-72 items-center flex gap-10'>
            <AchievementsBlock/>
            <StatisticsBlock/>
            <TasksBlock/>
        </div>
    );
};

export default GroupBlocks;