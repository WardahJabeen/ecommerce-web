import React from 'react'
import img from "../assets/img.jpg"

const Collections = () => {
    return (
        <div className='h-screen lg:h-[70ch] flex flex-col justify-center lg:flex-row items-center bg-PrimaryColor mt-14 lg:px-32'>
            <div className='flex justufy-center w-full lg:w-2/4 pt-6'>
                <img src={img} alt="img" />
            </div>

            <div className='w-full lg:w-2/4 space-y-4pt-5 text-center lg:text-start'>
                <h1 className='text-4xl font-semibold text-ExtraDarkColor'> Best Summer Collection</h1>
                <h3 className='text-lg font-medium text-DarkColor'>Sale Get Up To 60% off</h3>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium dolorem sapiente ullam dolorum possimus voluptates nemo nobis non beatae voluptatum quis officia quia nisi ea, corporis adipisci numquam eaque.</p>

                <button className='bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800'>
                    Shop Now
                </button>
            </div>
        </div>

    )
}

export default Collections