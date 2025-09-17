import React from 'react';

type Props = {
    difficulty:string
}

const DifficultyText = ({difficulty}:Props) => {
    return (
        <p className="text-sm font-extralight text-gray-900 dark:text-white">{difficulty}</p>
    );
};

export default DifficultyText;