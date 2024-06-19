import React from 'react'
import SongCard from './SongCard'
const Section = ({ title, data, displayText }) => {
    return (
        <>
            <div className="p-4 sm:ml-64">
                <h1 className='p-3 text-3xl font-bold'>{title}</h1>
                <div className='flex flex-row gap-4 overflow-x-auto min-w-full'>
                    <div className='flex-shrink-0 flex gap-5'>
                        {data.map((item, index) => (
                            <SongCard key={index} items={item} displayText={displayText} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section