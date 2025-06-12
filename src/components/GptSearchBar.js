import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { GEMINI_API_URL, GEMINI_API_KEY, API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = ({ setIsLoading }) => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const [isSelected, setIsSelected]=useState(false)

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

 const handleGptSearchClick = async () => {
    setIsSelected(true);
    setIsLoading(true); 
    const userInput = searchText.current.value;

    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query : ${userInput}. Only give me names of 5 movies, comma separated like the example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    try {
        const response = await fetch(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: gptQuery }],
                        },
                    ],
                }),
            }
        );

        const data = await response.json();
        const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!textResponse) {
            console.error("No response from Gemini");
            setIsLoading(false);
            return;
        }

        const gptMovies = textResponse.split(",").map(movie => movie.trim());
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    } catch (error) {
        console.error("Gemini API Error:", error);
    } finally {
        setIsLoading(false); 
    }
};

    return (
        <div className={`flex justify-center  items-end ${isSelected? "h-[20vh]": "h-[55vh]"} `}>
            <form className="w-full max-w-2xl px-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex items-center bg-white rounded-full overflow-hidden shadow-xl shadow-black">
                    <input
                        ref={searchText}
                        type="text"
                        className="flex-grow px-4 py-3 text-sm md:px-6 md:py-4 md:text-xl text-gray-700 focus:outline-none"
                        placeholder={lang[langKey].getSearchPlaceholder}
                    />
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 text-sm md:px-6 md:py-4 md:text-xl font-semibold transition"
                        onClick={handleGptSearchClick}
                    >
                        {lang[langKey].search}
                    </button>
                    </div>

            </form>
        </div>
    );
};

export default GptSearchBar;



// import React, { useRef } from 'react';
// import lang from '../utils/languageConstants';
// import { useSelector } from 'react-redux';
// import openai from '../utils/openai';
// // import { OPENAI_KEY } from '../utils/constants';

// const GptSearchBar = () => {
//     const langKey = useSelector(store => store.config.lang)
//     // console.log("Lang Key ::>>",langKey);
//     const searchText = useRef(null);

    
//     // const handleGptSearchClick = async() => {
//     //     try {
//     //         const aiResult = await openai.chat.completions.create({
//     //             model: 'gpt-3.5-turbo',
//     //             messages: [
//     //             { role: 'user', content: searchText.current.value },
//     //             ],
//     //         });
//     //         console.log(aiResult);
//     //     } catch (error) {
//     //         console.log("Error ::>>", error);
            
//     //     }
//     // }


//     // const handleGptSearchClick = async () => {
//     //     try {
//     //         const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
//     //             method: 'POST',
//     //             headers: {
//     //                 Authorization: 'Bearer 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',
//     //                 'HTTP-Referer': 'http://localhost:3000',  // ✅ your local domain
//     //                 'X-Title': 'GPT Local Test App',
//     //                 'Content-Type': 'application/json',
//     //             },
//     //             body: JSON.stringify({
//     //                 model: 'openai/gpt-4o', // Or any other model available via OpenRouter
//     //                 messages: [
//     //                     {
//     //                         role: 'user',
//     //                         content: searchText.current.value,
//     //                     },
//     //                 ],
//     //             }),
//     //         });
    
//     //         if (!response.ok) {
//     //             throw new Error(`HTTP error! status: ${response.status}`);
//     //         }
    
//     //         const aiResult = await response.json();
//     //         console.log("AI Response:", aiResult);
//     //     } catch (error) {
//     //         console.error("Error ::>>", error);
//     //     }
//     // };
    


//     return (
//         <div className="flex justify-center items-center h-screen">
//             <form className="w-full max-w-2xl px-4"
//                 onSubmit={(e) => e.preventDefault()}>
//                 <div className="flex items-center bg-white rounded-full overflow-hidden shadow-xl shadow-black">
//                     <input
//                         ref={searchText}
//                         type="text"
//                         className="flex-grow px-6 py-4 text-xl text-gray-700 focus:outline-none"
//                         placeholder={lang[langKey].getSearchPlaceholder}
//                     />
//                     <button
//                         type="submit"
//                         className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 text-xl font-semibold transition"
//                         onClick={handleGptSearchClick}>
//                         {lang[langKey].search}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default GptSearchBar;
