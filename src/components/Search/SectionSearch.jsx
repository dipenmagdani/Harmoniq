import React from 'react'
import { useContext } from 'react'
import SongContext from '../../contexts/SongContext'
import SearchSongCard from './SearchSongCard'
const SectionSearch = ({ title, data, isLoading }) => {
    const { isLoadingCard } = useContext(SongContext)

    return (
        <>
            <div className="sm:ml-64">
                <h1 className='p-3 text-3xl font-bold'>{isLoadingCard ? "" : title}</h1>
                <div className='flex flex-row gap-4 overflow-x-auto min-w-full'>
                    <div className='flex-shrink-0 flex gap-5'>
                        {data.map((item, index) => (
                            <SearchSongCard key={index} items={item} isLoading={isLoading} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionSearch