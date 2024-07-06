import React from 'react';
import './petSelect.scss'

const PetSelect = ({children}) => {
    return (
        <select>
            {children}
        </select>
    );
};

export default PetSelect;