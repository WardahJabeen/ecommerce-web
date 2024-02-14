import React from 'react'
import ProductCard from '../layouts/ProductCard';

const Features = () => {
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

    return (
        <div className='min-h-screen flex flex-col justify-center pt-24 bg-white'>
            {/* heading */}
            <div>
                <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor'>Exclusive Products</h1>
            </div>
            {/* carousel */}
            <div className='flex flex-wrap justify-center gap-5 pt-8'>
                {data.map((item) => (
                    <div className='md:w-2/4 lg:w-1/4'>
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            discount={item.discount}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features