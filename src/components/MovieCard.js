// MovieCard.js
import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath, onClick }) => {
    if (!posterPath) return null;

    return (
        <div
            className="min-w-[120px] md:min-w-[220px] min-h-[180px] overflow-hidden cursor-pointer"
            onClick={onClick}
        >
            <div className="h-full transform hover:scale-110 origin-center transition-transform duration-300">
                <img
                    className="w-full h-full object-cover rounded-lg"
                    alt="Movie Card"
                    src={IMG_CDN_URL + posterPath}
                />
            </div>
        </div>
    );
};

export default MovieCard
