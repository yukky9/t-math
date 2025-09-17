import React from 'react';

type Props = {
    title:string
}

const GeneralText = ({title}:Props) => {
    return (
        <p className="text-4xl font-semibold text-white mb-3">{title}</p>
    );
};

export default GeneralText;