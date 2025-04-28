import React from 'react';

const GptSearchBar = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full max-w-2xl px-4">
                <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                    <input
                        type="text"
                        className="flex-grow px-6 py-4 text-xl text-gray-700 focus:outline-none"
                        placeholder="What would you like to watch today?"
                    />
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 text-xl font-semibold transition"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GptSearchBar;
