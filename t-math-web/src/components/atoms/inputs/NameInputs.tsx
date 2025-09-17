import React from 'react';

const NameInputs = () => {
    return (
        <div className="mb-5">
            <input type="text" id="base-input" placeholder='Напишите название'
                   className="bg-white border border-yellow text-gray-900 text-sm rounded-lg focus:ring-yellow focus:border-yellow block w-auto p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <div className='mt-5'>
                <input type="text" id="base-input" placeholder='Опишите'
                       className="bg-white border border-yellow text-gray-900 text-sm rounded-lg focus:ring-yellow focus:border-yellow block w-auto p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
        </div>
    );
};

export default NameInputs;