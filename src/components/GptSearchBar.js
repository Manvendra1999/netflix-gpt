import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
const langKey = useSelector(store => store.config.lang)

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full max-w-2xl px-4">
                <div className="flex items-center bg-white rounded-full overflow-hidden shadow-xl shadow-black">
                    <input
                        type="text"
                        className="flex-grow px-6 py-4 text-xl text-gray-700 focus:outline-none"
                        placeholder={lang[langKey].getSearchPlaceholder}
                    />
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 text-xl font-semibold transition"
                    >
                        {lang[langKey].search}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GptSearchBar;
