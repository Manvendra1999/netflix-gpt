import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constants';
import YouTube from 'react-youtube';
import ReplayIcon from '@mui/icons-material/Replay';

const TrailerPlayer = () => {
    // const { movieName } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const movieId = state?.movieId;

    const [showReplay, setShowReplay] = useState(false);
    const [playerRef, setPlayerRef] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);
    const [loading, setLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        if (!movieId) return;

        const fetchDetails = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
                    API_OPTIONS
                );
                const data = await res.json();
                setMovieDetails(data);
            } catch (err) {
                console.error("Failed to fetch movie details:", err);
            }
        };

        fetchDetails();
    }, [movieId]);
    useEffect(() => {
        if (!movieId) {
            alert("Movie ID is missing. Redirecting back.");
            return navigate(-1);
        }

        const fetchTrailer = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                    API_OPTIONS
                );
                const data = await res.json();
                const trailer = data.results.find(
                    (v) => v.type === 'Trailer' && v.site === 'YouTube'
                );
                if (trailer) {
                    setTrailerKey(trailer.key);
                } else {
                    alert("Trailer not available.");
                    navigate(-1);
                }
            } catch (err) {
                console.error('Failed to load trailer:', err);
                navigate(-1);
            } finally {
                setLoading(false);
            }
        };

        fetchTrailer();

        const handleEsc = (e) => {
            if (e.key === 'Escape') navigate(-1);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [movieId]);

    return (
        <div className="min-h-screen bg-black text-white overflow-y-auto">
            {/* Trailer Section */}
            <div className="w-full aspect-video relative">
                {loading ? (
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <>
                        <YouTube
                            videoId={trailerKey}
                            className="w-full h-full"
                            opts={{
                                width: '100%',
                                height: '100%',
                                playerVars: {
                                    autoplay: 1,
                                    controls: 1,
                                },
                            }}
                            onReady={(e) => setPlayerRef(e.target)}
                            onEnd={() => setShowReplay(true)}
                        />

                        {showReplay && (
                            <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
                                <button
                                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg rounded-full font-semibold transition"
                                    onClick={() => {
                                        setShowReplay(false);
                                        playerRef?.seekTo(0);      
                                        playerRef?.playVideo();     
                                    }}
                                >
                                    <ReplayIcon /> Replay
                                </button>
                            </div>
                        )}

                    </>
                )}
            </div>


            {/* Movie Details Section */}
            {!loading && movieDetails && (
                <div className="px-6 py-4 bg-gradient-to-b from-[#111] to-black text-white">
                    <div className="mx-auto flex flex-col md:flex-row gap-6">
                        {/* Poster */}
                        <img
                            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            className="w-20 md:w-44 md:h-52 rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
                        />

                        {/* Info */}
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                {movieDetails.title}
                            </h1>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 text-sm mb-4">
                                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-medium">
                                    {movieDetails.release_date}
                                </span>
                                <span className="bg-white text-black px-3 py-1 rounded-full font-semibold">
                                    Rating: {movieDetails.vote_average.toFixed(1)} / 10
                                </span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full font-medium">
                                    {movieDetails.runtime} mins
                                </span>
                            </div>

                            {/* Overview */}
                            <p className="text-gray-300 leading-relaxed max-w-3xl text-sm md:text-base">
                                {movieDetails.overview}
                            </p>

                            {/* Buttons */}
                            <div className="mt-4 flex gap-4">
                                {/* <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-300 transition">
                                      ▶️ Play
                                    </button> */}
                                <button className="bg-gray-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-600 transition">
                                    ➕ My List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>

    );
};

export default TrailerPlayer;
