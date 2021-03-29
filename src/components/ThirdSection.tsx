import React from 'react';
import imgBenefits from '../images/Rectangle.png'

const ThirdSection = () => {
    return (
        <div className='bemefits'>
            <div className="container">
                <h3 className="benefitsTitle">
                    Преимущества
                </h3>
                <div className="benefitsItems">
                    <ul className="benefitsList">
                        <li className="benefitsListItem">мойка авто каждую неделю</li>
                        <li className="benefitsListItem">премиум автомобили</li>
                        <li className="benefitsListItem">мощный двигатель</li>
                        <li className="benefitsListItem">поддержка 24/7</li>
                        <li className="benefitsListItem">бензин за наш счет</li>
                        <li className="benefitsListItem">парковка по всему городу</li>
                        <li className="benefitsListItem">каждый месяц ТО автомобиля</li>
                    </ul>
                    <img src={imgBenefits} alt="car" className="benefitsImages"/>
                    <div className="benefitsContent">
                        <p className="benefitsText">Вы можете выбрать один из 300 наших автомобилей, насладиться
                            сервисом, повысить уровень жизни, не покупая дорогой автомобиль, успевать везде и каждый
                            день ездить на новом премиум автомобиле.
                        </p>
                        <p className="benefitsText">Посмотрите видео презентацию нашего сервиса и выберите автомобиль
                            уже сейчас!</p>
                        <a href="#" className="videoPopup">
                            ПОСМОТРЕТЬ<br/>
                            ПРЕЗЕНТАЦИЮ
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;