import React from 'react';

const FourthSection = () => {
    return (
        <div className='reviews'>
            <div className='container'>
                <h3 className="reviewsTitle">
                    Отзывы
                </h3>
                <div className="reviewsSlider">
                    <div className="reviewsItem">
                        <p className="reviewsItemName">Михаил, 28 лет</p>
                        <p className="reviewsItemText">Очень рад, что Вы есть!
                            Пока еще бэху купить не могу, но покататься взять - это
                            отличная возможность! Такое ощущение, что у меня личный
                            огромный автопарк элитных тачек)))</p>
                    </div>
                    <div className="reviewsItem">
                        <p className="reviewsItemName">Инна, 35 лет</p>
                        <p className="reviewsItemText">Очень радует Ваш сервис. Встречаю
                            ВИП клиентов всегда только на Ваших машинах.
                            Удобно, что расчет по минутам, это экономит бюджет компании.</p>
                    </div>
                    <div className="reviewsItem">
                        <p className="reviewsItemName">Игорь, 25 лет</p>
                        <p className="reviewsItemText">Ребята, Вы ТОПЧИК!
                            Брал машину на свидание, покатал девушку, она в восторге,
                            я доволен, все счастливы)</p>
                    </div>
                    <div className="reviewsItem">
                        <p className="reviewsItemName">Марина, 30 лет</p>
                        <p className="reviewsItemText">Люблю Ваш сервис. Не люблю такси.
                            В приложении быстро нахожу машину поблизости. Всегда чистая,
                            свежая, приятно садиться в нее. До работы или на шопинг
                            еду с комфортом.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;