import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AchivementsPage from '../../components/page/AchivementsPage/AchivementsPage';
import GeneralPage from '../../components/page/GeneralPage/GeneralPage';
import StatisticsPage from '../../components/page/StatisticsPage/StatisticsPage';
import TasksPage from '../../components/page/TasksPage/TasksPage';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GeneralPage/>}/>
                <Route path="/statistics" element={<StatisticsPage/>}/>
                <Route path="/tasks" element={<TasksPage/>}/>
                <Route path="/achievements" element={<AchivementsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;