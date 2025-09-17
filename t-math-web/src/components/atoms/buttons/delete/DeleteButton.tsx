import React from 'react';
import deleteBt from '../../image/icons/icons8-delete-24.png'

type Props = {
    text: string
}

const DeleteButton = ({text}: Props) => {
    return (
        <button
            className="w-auto ml-96 mb-3 flex gap-3 text-center hover:bg-red-700 text-dark-blue font-semibold hover:text-black bg-grey py-2 px-4 border-2 border-dark-blue hover:border-transparent rounded-xl">
            <img className='my-auto' src={deleteBt} alt='back'/>
            {text}
        </button>
    );
};

export default DeleteButton;