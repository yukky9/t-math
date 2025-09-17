import React from 'react';

const TypeThemeInput = () => {
    return (
        <div>
            <label className=" text-left block mb-2 text-sm font-medium text-gray-900 dark:text-black" htmlFor="default_size">Задание</label>
            <input
                className="block p-2 h-10 w-56 mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-500 focus:outline-none dark:bg-gray-300 dark:border-gray-600 dark:placeholder-white"
                id="default_size" type="file"/>
        </div>
    );
};

export default TypeThemeInput;