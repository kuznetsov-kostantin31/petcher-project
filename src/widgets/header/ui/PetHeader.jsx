import React from 'react';
import Register from "../../../shared/ui/register/register";

const PetHeader = () => {
    return (
        <header>
            <div className="logo"></div>
            <div className="route-href">
                <a href="/home">Главная</a>
                <a href="">Проекты</a>
                <a href="">О нас</a>
            </div>
            <Register/>
        </header>
    );
};

export default PetHeader;