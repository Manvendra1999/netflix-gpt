import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className="min-w-[190px] md:min-w-[240px] overflow-hidden">
            <div className="transform hover:scale-110 origin-center transition-transform duration-300">
                <img
                    className="w-full h-60 md:h-80 object-cover rounded-lg"
                    alt="Movie Card"
                    src={IMG_CDN_URL + posterPath}
                />
            </div>
        </div>
    );
};

export default MovieCard
