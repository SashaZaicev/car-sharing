import React, {useState} from "react";
import Slider from "react-slick";
import {v1} from "uuid";

import slide_one from "../../images/slider-img.png";
import slide_two from "../../images/chevrolet.png";
import slide_three from "../../images/cadillac.png";


const Carousel = () => {
    const settings = {
        // dotsClass: `${s.dots}`,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 400
    };
    const [image, senImage] = useState([
        {
            id: v1(),
            img: slide_one,
            price: '4 грн/мин',
            place: '5 мест',
            mileage: '50 тыс. км пробег'
        },
        {
            id: v1(),
            img: slide_two,
            price: '44 грн/мин',
            place: '2 места',
            mileage: '500 тыс. км пробег'
        },
        {
            id: v1(),
            img: slide_three,
            price: '500 грн/мин',
            place: '2 места',
            mileage: '5000 тыс. км пробег'
        },
    ])
    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}
        >
            <Slider {...settings}>
                {image.map(el =>
                    <div>
                        <div key={el.id} className='carrousel_image topSliderItem'>
                            <img className='topSliderImages' src={el.img} alt=""/>
                            <p className="topSliderText">
                                <span>{el.price}</span> <span>{el.place}</span> <span>{el.mileage}</span>
                            </p>
                        </div>
                    </div>)}

            </Slider>
        </div>
    );
};

export default Carousel;