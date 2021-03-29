import React from 'react';

const SecondSection = () => {
    return (
        <div className='rent'>
            <div className="container">
                <div className="rentInner">
                    <div className="rentContent">
                        <h3 className="rentTitle">Условия аренды
                            автомобиля</h3>
                        <p className="rentText">Мы ценим каждого клиента и предоставляем качественный сервис каршеринга
                            в Киеве.
                        </p>
                        <p className="rentText">Именно для того, что бы Вам было приятно и безопасно пользоваться нашим
                            сервисом на постоянной основе, мы выделили несколько условий для того, чтобы взять машину в
                            аренду</p>
                        <a className="aplicationBtn" href="#">Скачать приложение</a>
                    </div>
                    <div className="rentItem">
                        <div className="rentItemNum">01</div>
                        <p className="rentItemTitle">Опыт вождения
                            от 2х лет
                        </p>
                        <p className="rentItemText">Для того, чтобы арендовать автомобиль, Вам необходимо
                            зарегестрировать свои прав в нашем мобильном приложении
                        </p>
                    </div>
                    <div className="rentItem">
                        <div className="rentItemNum">02</div>
                        <p className="rentItemTitle">Только по Киеву</p>
                        <p className="rentItemText">Наши автомобили работают только в пределах города Киев.
                            За город на наших автомобилях, к сожалению, выезжать нельзя.
                        </p>
                    </div>
                    <div className="rentItem">
                        <div className="rentItemNum">03</div>
                        <p className="rentItemTitle">Мобильный телефон и интернет</p>
                        <p className="rentItemText">Для использования нашего сервиса Вам необходим мобильный телефон и
                            интернет.
                            Бронирование, оплата и вся отчетность происходит онлайн
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;