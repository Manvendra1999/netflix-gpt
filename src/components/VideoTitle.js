import React, { useEffect, useState } from 'react'

const VideoTitle = ({ title, overview }) => {

  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="overflow-x-hidden">
      {showTitle && (
        <div className="py-16 md:py-[18%] px-3 md:px-14 absolute w-screen aspect-video">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold md:mb-6 text-white">
            {title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-8 leading-relaxed text-white">
            {overview.split(' ').slice(0, 15).join(' ')}...
          </p>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
              {/* Black play icon */}
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l12 6-12 6V4z" />
              </svg>
              Play
            </button>
            <button className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition">
              {/* White info icon */}
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0 1 1 0 002 0zm-1 2a1 1 0 00-.993.883L9 9v4a1 1 0 001.993.117L11 13V9a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              More Info
            </button>
          </div>
        </div>
      )}
    </div>



  )
}

export default VideoTitle
