import React from 'react'
import img from "../assets/img.jpg"
const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg-justify-between lg:px-32 px-5 bg-PrimaryColor">
            <div className=" space-y-4">
                <h1 className='text-ExtraDarkColor leading-tight font-semibold text-5xl w-full lg:w-3/4'> Stay up to date with the trend! </h1>
                <p className='w-full lg:w-3/4 text-DarkColor font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magni quisquam aperiam, culpa dignissimos sint est, quos reiciendis maxime ex vel corporis! Aperiam saepe distinctio nesciunt sed quis dolor aut.
                </p>
                <button className='bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800'> shop now</button>
            </div>
            <div className='bg-DarkColor rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl p-5 mt-10'>
                <img className="-ml-5 -mb-5" width={600} src={img} alt="img" />
            </div>
        </div>
    )
}

export default Home