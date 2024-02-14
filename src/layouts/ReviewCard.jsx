import React from 'react'
import { ImQuotesLeft } from "react-icons/im"

const ReviewCard = (props) => {
    return (
        <div className='flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5  cursor-pointer hover:bg-white transition duration-300 ease-in-out'>
            <div>
                <ImQuotesLeft size={25} />
                <h1 className='text-xl font-semibold text-ExtraDarkColor pt-4'>{props.name}</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod repellat, vero, delectus possimus laborum labore, unde veritatis voluptatibus perspiciatis culpa omnis. Quibusdam porro consequuntur facilis, tempore incidunt quo. Id.</p>
        </div>
    )
}

export default ReviewCard