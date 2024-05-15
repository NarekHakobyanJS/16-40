import React from 'react'
import Slider from "react-slick";
import { slider } from '../../db';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    slider.map((sl, index) => {
                        return <img key={index} src={sl} />
                    })
                }
            </Slider>
        </div>
    )
}

export default HomeSlider