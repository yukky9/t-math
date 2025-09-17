import React from 'react';

type Props = {
    description: any
}

const DescriptionText = ({description}:Props) => {
    return (
        <p className="text-sm font-light text-gray-900 dark:text-dark-blue">{description}</p>
    );
};

export default DescriptionText;