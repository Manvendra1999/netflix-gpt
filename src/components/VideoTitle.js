// import React, { useEffect, useState } from 'react'

const VideoTitle = ({ title, overview }) => {

  // const [showTitle, setShowTitle] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowTitle(false);
  //   }, 5000); // 5000ms = 5 seconds

  //   return () => clearTimeout(timer); // Cleanup on unmount
  // }, []);

  return (
    <div className="overflow-x-hidden">
      {/* {showTitle && ( */}
      <div className="py-16 md:py-[18%] px-3 md:px-14 absolute w-screen aspect-video">
        <h1 className="text-sm sm:text-2xl md:text-4xl font-bold md:mb-6 text-white">
          {title}
        </h1>

        <p className="line-clamp-3 sm:line-clamp-none text-xs sm:text-base md:text-lg w-full md:w-1/2 lg:w-1/3 mb-1 md:mb-8 text-white">
          {overview}
        </p>

        <div className="flex gap-2 sm:gap-4">
          <button className="flex items-center gap-1 sm:gap-2 bg-white text-black px-2 py-1 md:px-6 md:py-3 rounded-md font-semibold hover:bg-gray-200 transition text-sm sm:text-base">
            {/* Black play icon */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
           
          </button>
          <button className="flex items-center gap-1 sm:gap-2 bg-gray-700 text-white px-2 py-1 md:px-6 md:py-3 rounded-md font-semibold hover:bg-gray-600 transition text-sm sm:text-base">
            {/* White info icon */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0 1 1 0 002 0zm-1 2a1 1 0 00-.993.883L9 9v4a1 1 0 001.993.117L11 13V9a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
         
          </button>
        </div>

      </div>
      {/* )} */}
    </div>
  )
}

export default VideoTitle
