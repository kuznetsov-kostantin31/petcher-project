import React from 'react';
import './petButton.scss'

const PetButton = ({children, ...props}) => {
    return (
        <a {...props} className="petBtn">
            {children}
        </a>
    );
};

export default PetButton;