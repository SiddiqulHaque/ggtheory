import React from 'react'

function Card({beer}){

    return (
        <div className=' border  black m-10 p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 text-black cursor-pointer'>
            <img className='h-[30] w-[20] object-cover rounded-xl m-auto  transition-transform duration-300 hover:cursor-pointer mb-4' src={beer.image} alt={beer.name} />
            <h1 className='text-2xl font-bold text-white-300'>{beer?.name}</h1>
            <p className='text-xl font-bold mb-2 '>Price: {beer?.price} </p>
            <p className='text-lg font-bold mb-2 '>Rating: {beer?.rating.average} </p>
            <p className='text-lg font-bold mb-2 '>Reviews: {beer?.rating.reviews} </p>
        </div>
    )
}


export default Card