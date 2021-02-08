import imgSlider from "../images/slider-img.png";
import React from "react";
import icon1 from './../images/icon-1.svg'
import icon2 from './../images/icon-2.svg'
import icon3 from './../images/icon-3.svg'


function FirstSection() {
    return (
        <div className='top'>
            <div className="container">
                <div className="topHeading">
                    <div className="topContent">
                        <h1 className="topTitle">
                            Каршеринг в Киеве
                            LUX автомобили
                        </h1>
                        <p className="topText">
                            Закажи эксклюзивный автомобиль через мобильное приложение в любой точке города
                        </p>
                        <a className="aplicationBtn" href="#">Скачать приложение</a>
                    </div>
                    <div className="topSlider">

                        <div className="topSliderItem">
                            <img className='topSliderImages' src={imgSlider} alt=""/>
                            <p className="topSliderText">
                                4 грн/мин 5 мест 50 тыс. км пробег
                            </p>
                        </div>
                        <div className="topSliderItem">
                            <img className='topSliderImages' src={imgSlider} alt=""/>
                            <p className="topSliderText">
                                4 грн/мин 5 мест 50 тыс. км пробег
                            </p>
                        </div>
                        <div className="topSliderItem">
                            <img className='topSliderImages' src={imgSlider} alt=""/>
                            <p className="topSliderText">
                                4 грн/мин 5 мест 50 тыс. км пробег
                            </p>
                        </div>
                        <div className="topSliderItem">
                            <img className='topSliderImages' src={imgSlider} alt=""/>
                            <p className="topSliderText">
                                4 грн/мин 5 мест 50 тыс. км пробег
                            </p>
                        </div>
                        <div className="topSliderItem">
                            <img className='topSliderImages' src={imgSlider} alt=""/>
                            <p className="topSliderText">
                                4 грн/мин 5 мест 50 тыс. км пробег
                            </p>
                        </div>
                        <div className="topSliderItem">
                            <img className='topSliderImages' src={imgSlider} alt=""/>
                            <p className="topSliderText">
                                4 грн/мин 5 мест 50 тыс. км пробег
                            </p>
                        </div>
                    </div>
                </div>
                <div className="topBottom">
                    <div className="topItems">
                        <div className="topItem">
                            <img src={icon1} alt="" className="topItemImg"/>
                            <p className="topItemText">
                                Более 300 автомобилей
                                в вашем распоряжении
                            </p>
                        </div>
                        <div className="topItem">
                            <img src={icon2} alt="" className="topItemImg"/>
                            <p className="topItemText">
                                Дешевле такси
                                и собственного автомобиля
                            </p>
                        </div>
                        <div className="topItem">
                            <img src={icon3} alt="" className="topItemImg"/>
                            <p className="topItemText">
                                Лучшие автомобили в любой точке города
                            </p>
                        </div>
                    </div>
                    <div className="topLinks">
                        <a className="topLink" href="#">Условия аренды автомобиля </a>
                        <a className="topLink" href="#">Публичный договор</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection;