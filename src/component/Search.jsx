import React, { useState } from 'react'

function Search({search, setSearch}){

    return (
        <div className='flex justify-center flex-wrap m-5'>
            <input type="text" 
            className='h-[10vh] w-[100vh] border-2   text-black  p-5 m-5 rounded-md font-bold text-xl  '
            placeholder='Search for Beers'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>        
    )
}

export default Search