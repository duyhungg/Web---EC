import styles from './Slider.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Sliders from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Slider() {
    const [data, setData] = useState();
    useEffect(() => {
        axios
            .get(' http://localhost:4000/slider')
            .then(function (response) {
                setData(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {});
    }, []);
    //console.log(data?.data);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="container">
            <Sliders {...settings}>
                {data?.data.map((item) => (
                    <img src={item.src} alt="" className="sliderImg" />
                ))}
            </Sliders>
        </div>
    );
}

export default Slider;
