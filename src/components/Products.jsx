import React from 'react'
import ProductCard from '../layouts/ProductCard';

const Products = () => {
    const data = [

        {
            id: 1,
            img: "/src/assets/jacket.jpg",
            name: "Jacket",
            price: "80.00",
            discount: "20% off",
        },
        {
            id: 2,
            img: "/src/assets/suit.jpg",
            name: "Suit",
            price: "380.00",
            discount: "20% off",
        },
        {
            id: 3,
            img: "/src/assets/jacket.jpg",
            name: "Jacket",
            price: "80.00",
            discount: "20% off",
        },
    ];

    return (
        <div className='min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16 bg-white'>
            {/* heading */}
            <div>
                <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor'>New Arrivals</h1>
            </div>
            {/* carousel */}
            <div className='flex flex-wrap justify-center gap-5 pt-8'>
                {data.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        discount={item.discount}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products