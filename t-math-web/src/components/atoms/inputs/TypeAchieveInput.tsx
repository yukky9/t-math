import React from 'react';

const TypeAchieveInput = () => {
    return (
        <div>
            <select id="default"
                    className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Выберите тип достижения</option>
                <option value="US">Рейтинг</option>
                <option value="CA">Топ</option>
                <option value="FR">Количество заданий</option>
            </select>
        </div>
    );
};

export default TypeAchieveInput;