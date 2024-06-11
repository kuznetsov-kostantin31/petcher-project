import React from 'react';
import PetHeader from "../../../widgets/header/ui/PetHeader";
import RegisterWidget from "../../../widgets/registerWidget/ui/RegisterWidget";
import './RegistrationPage.scss'

const RegistrationPage = () => {
    return (
        <div className="regist-content">
            <PetHeader/>
            <div className="regist-head">
                <h3>Добро пожаловать в Petcher</h3>
            </div>
            <RegisterWidget/>
        </div>
    );
};

export default RegistrationPage;