import React from 'react';
import PetHeader from "../../../widgets/header/ui/PetHeader";
import PetFooter from "../../../widgets/footer/ui/PetFooter";

import petcher_img from '../../../shared/assets/img/petcher-first-img.png'
import third_img from '../../../shared/assets/icons/преимущества.svg'
import q_arrow from '../../../shared/assets/icons/q_arrow.svg'
import arrow from '../../../shared/assets/icons/arrow.svg'
import info_img from '../../../shared/assets/icons/info-slide.svg'
import info_img2 from '../../../shared/assets/icons/info-slide2.svg'
import info_img3 from '../../../shared/assets/icons/info-slide3.svg'
import shadow from '../../../shared/assets/icons/mainpage_shadow.svg'
import shadow2 from '../../../shared/assets/icons/mainpage_shadow2.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MainPage.scss'
import Register from "../../../shared/ui/register/register";
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const MainPage = () => {
    return (
        <div>
            <PetHeader/>
            <div className="mainPage-content">
                <div className="first-info">
                    <img className="shadow" src={shadow} alt=""/>
                    <div className="first-img">
                        <img src={petcher_img} alt=""/>
                    </div>
                    <div className="petcher-info">
                        <div className="petcher-name-des">
                            <h1>Petcher</h1>
                            <p className="pet-cher">(pet-проект + кетчер)</p>
                        </div>
                        <p className="petcher-descript">Petcher — это платформа, которая <br/> позволяет
                            находить pet-проекты, <br/> подходящие пользователю.</p>
                        <a href="#second-info">
                            <div className="arrow">
                                <img src={q_arrow} alt=""/>
                                <img className="arr" src={arrow} alt=""/>
                            </div>

                        </a>

                    </div>
                </div>
                <div className="second-info" id="second-info">
                    <h1>Кому это нужно?</h1>
                    <div className="first-row">
                        <div className="o-quad quad">
                            <h2>Компаниям,</h2>
                            <p className="second-info-descr">
                                которые ищут талантливых разработчиков для своих проектов.
                            </p>
                        </div>
                        <div className="s-quad quad">
                            <h2>Людям,</h2>
                            <p className="second-info-descr">
                                тем, кто хочет участвовать в проекте в качестве волонтёра.
                            </p>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="t-quad quad">
                            <h2>Инвесторам</h2>
                            <p className="second-info-descr">
                                Petcher может стать источником интересных pet-проектов для инвестирования.
                            </p>
                        </div>
                        <div className="f-quad quad">
                            <h2>Студентам</h2>
                            <p className="second-info-descr">
                                Для них площадка может стать возможностью найти интересные проекты для практики.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="third-info">
                    <h1>Наши преимущества</h1>
                    <img src={third_img} alt=""/>
                </div>
                <div className="how-start">
                    <h1>Как начать?</h1>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={info_img} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={info_img2} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={info_img3} alt=""/></SwiperSlide>
                    </Swiper>
                    <img className="shadow2" src={shadow2} alt=""/>
                </div>
                <Register style={{
                    height: "46px",
                    width: "375px",
                    fontWeight: "400",
                    fontSize: "24px",
                    border: "4px solid rgb(6, 124, 255)",
                    marginTop: "156px"
                }}/>

            </div>
            <PetFooter/>
        </div>
    );
};

export default MainPage;