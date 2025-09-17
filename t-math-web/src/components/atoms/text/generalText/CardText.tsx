import React from 'react';

type Props = {
    title:string
}

const CardText = ({title}:Props) => {
    return (
        <p className="text-4xl font-semibold text-dark-blue mb-3">{title}</p>
    );
};

export default CardText;