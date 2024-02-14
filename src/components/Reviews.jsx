import React from 'react'
import ReviewCard from '../layouts/ReviewCard'

const Reviews = () => {
    return (
        <div>
            <div>
                hi
            </div>
            <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-PrimaryColor'>
                <h1 className='text-4xl font-semibold text-center text-ExtraDarkColor lg:mt-14 mt-24 '>Feedback Centre</h1>
                <div className='flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8'>
                    <ReviewCard name="Wardah Jabeen" />
                    <ReviewCard name="Wardah Jabeen" />
                    <ReviewCard name="Wardah Jabeen" />
                </div>
            </div>
        </div>
    )
}

export default Reviews