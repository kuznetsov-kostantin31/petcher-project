import React from 'react';
import './petButton.scss'

const PetButton = ({children, ...props}) => {
    return (
        <button {...props} className="petBtn">
            {children}
        </button>
    );
};

export default PetButton;