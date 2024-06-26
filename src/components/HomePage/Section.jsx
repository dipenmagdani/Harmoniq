import React from 'react'
import SongCard from './SongCard'
import { useContext } from 'react'
import SongContext from '../../contexts/SongContext'
const Section = ({ title, data, displayText, isLoading }) => {
    const { isLoadingCard, searchQuery, setSearchQuery } = useContext(SongContext)

    return (
        <>
            <div className="p-4 sm:ml-64">
                <h1 className='p-3 text-3xl font-bold'>{isLoadingCard ? "" : title}</h1>
                <div className='flex flex-row gap-4 overflow-x-auto min-w-full'>
                    <div className='flex-shrink-0 flex gap-5'>
                        {data.map((item, index) => (
                            <SongCard key={index} items={item} displayText={displayText} isLoading={isLoading} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section