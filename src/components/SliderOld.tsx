import { Carousel } from 'antd';
import s from "./carousel.module.css"
import image from '../images/slider-img.png'

const Slider = () => {
    return (
        <Carousel autoplay>
            <div>
                <h3 className={s.contentStyle}>{image}</h3>
            </div>
            <div>
                <h3 className={s.contentStyle}>{image}</h3>
            </div>
            <div>
                <h3 className={s.contentStyle}>{image}</h3>
            </div>
            <div>
                <h3 className={s.contentStyle}>{image}</h3>
            </div>
        </Carousel>
    );
};

export default Slider;