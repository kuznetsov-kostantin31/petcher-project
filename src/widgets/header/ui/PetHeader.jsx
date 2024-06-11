import React from 'react';
import Register from "../../../shared/ui/register/register";
import petcher_img from '../../../shared/assets/img/petcher-icon-header.png'


import './header.scss'
const PetHeader = () => {
    return (
        <header>
            <div className="logo-header">
                <a href="/">
                    <img
                        src={petcher_img}
                        alt=""/>
                </a>
            </div>
            <div className="route-href">
                <a href="">Главная</a>
                <a href="">Проекты</a>
                <a href="" style={{marginRight: "157px"}}>О нас</a>
            </div>
            <Register/>
        </header>
    );
};

export default PetHeader;