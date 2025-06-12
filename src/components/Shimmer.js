import React from "react";

const Shimmer = () => {
  return (
    <div className="p-4 m-4 bg-black opacity-90 text-white animate-pulse">
      {[...Array(2)].map((_, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          {/* Title placeholder */}
          <div className="h-8 w-48 bg-gray-700 rounded mb-4"></div>

          {/* Card placeholders */}
          <div className="flex gap-4 overflow-x-auto">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-44 h-64 bg-gray-800 rounded-lg shadow-lg"
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
