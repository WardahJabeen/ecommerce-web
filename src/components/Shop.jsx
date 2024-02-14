import React from 'react'
import ProductCard from '../layouts/ProductCard';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const Shop = () => {
    const data = [
        {
            id: 0,
            img: "/src/assets/img.jpg",
            name: "BrandName",
            price: "80.00",
            discount: "20% off",
        },
        {
            id: 1,
            img: "/src/assets/bag.jpg",
            name: "Purse",
            price: "80.00",
            discount: "20% off",
        },
        {
            id: 2,
            img: "/src/assets/coat.jpg",
            name: "Coat",
            price: "180.00",
            discount: "20% off",
        },
        {
            id: 3,
            img: "/src/assets/suit.jpg",
            name: "Suit",
            price: "380.00",
            discount: "20% off",
        },
        {
            id: 4,
            img: "/src/assets/watch.jpg",
            name: "Watch",
            price: "280.00",
            discount: "20% off",
        },
        {
            id: 5,
            img: "/src/assets/jacket.jpg",
            name: "Jacket",
            price: "80.00",
            discount: "20% off",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: 1,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                setting: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                setting: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2

                }
            },
            {
                breakpoint: 480,
                setting: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1

                }
            }
        ]
    };

    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14'>
            {/* heading */}
            <div>
                <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor'>Best sellers</h1>
            </div>
            {/* carousel */}
            <div className='mt-8'>
                <Slider {...settings}>
                    {data.map((item) => (<ProductCard
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        discount={item.discount}
                    />))}
                </Slider>
            </div>
        </div>
    )
}

export default Shop