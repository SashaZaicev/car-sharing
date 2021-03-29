import React from 'react';
import feedImg from '../images/Rectangle 35.png'

const FiveSection = () => {
    return (
        <div className="feedback">
            <div className="container">
                <div className="feedbackInner">
                    <img src={feedImg} alt="" className="feedbackImages"/>
                    <form action="" className="feedbackForm">
                        <h3 className="feedbackTitle">
                            Остались вопросы?
                        </h3>
                        <p className="feedbackText">
                            Мы перезвоним Вам и проконсультируем по любому вопросу
                        </p>
                        <input className="feedbackInput" type="text" placeholder="Имя"/>
                        <input className="feedbackInput" type="text" placeholder="Телефон"/>
                        <button type='submit' className="feedbackBtn" >ОСТАВИТЬ ЗАЯВКУ</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default FiveSection;