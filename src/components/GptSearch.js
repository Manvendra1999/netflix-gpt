import React, { useState } from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 -z-10">
                <img
                    src={BG_URL}
                    alt="Netflix Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <GptSearchBar setIsLoading={setIsLoading} />
            <GptMovieSuggestions isLoading={isLoading} />
        </div>
    )
}

export default GptSearch
