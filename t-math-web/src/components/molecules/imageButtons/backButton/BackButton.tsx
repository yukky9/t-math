import React from 'react';
import backBt from '../../../atoms/image/icons/Vector.png';

type Props = {
    text: string
}

const BackButton = ({text}: Props) => {
    return (
        <button
            className="w-auto ml-96 mb-3 flex gap-3 text-center hover:bg-yellow text-dark-blue font-semibold hover:text-black bg-grey py-2 px-4 border-2 border-dark-blue hover:border-transparent rounded-xl">
            <img className='my-auto' src={backBt} alt='back'/>
            {text}
        </button>
    );
};

export default BackButton;