import React from 'react';

const NumInput = () => {
    return (
        <div className="mb-5 mt-14">
                <input type="text" id="base-input" placeholder='Задайте число кратное 5'
                       className="bg-white border border-yellow text-gray-900 text-sm rounded-lg focus:ring-yellow focus:border-yellow block w-auto p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
    );
};

export default NumInput;