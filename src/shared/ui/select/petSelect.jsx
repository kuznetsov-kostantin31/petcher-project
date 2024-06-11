import React from 'react';
import './petSelect.scss'

const PetSelect = () => {
    return (
        <select>
            <ul>
                <option value="">Frontend-разработчик</option>
                <option value="">Python-разработчик</option>
                <option value="">1С-разработчик</option>
                <option value="">Java-разработчик</option>
                <option value="">Web-дизайнер</option>
            </ul>
        </select>
    );
};

export default PetSelect;