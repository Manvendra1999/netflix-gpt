import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { auth } from '../utils/Firebase';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector(store => store.user);
  const showGptSeatch = useSelector((store) => store.gpt.showGptSeatch);
  // console.log("userrrrr111", showGptSeatch)

  const [shrinkLogo, setShrinkLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShrinkLogo(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);


  const handleSignOut = () => {
    signOut(auth).then(() => {
    })
      .catch((error) => {
        nevigate("/error");
      });

  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // console.log("User ::>>",user);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        nevigate("/browse");
      } else {
        dispatch(removeUser());
        nevigate("/");
      }
    });
    return () => unsubscribe();
  }, [])

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());

  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  };

  return (
    <div className="absolute w-full px-4 md:py-3 bg-gradient-to-b from-black z-30 flex space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
      <div className='w-full md:w-auto'>
        <img
          className={`transition-all duration-700 ease-in-out ${shrinkLogo
            ? "w-24 md:w-36 mx-0"
            : "w-36 md:w-48 mx-auto"
            }`}
          src={LOGO}
          alt="Logo"
        />
      </div>
      <div className="relative">
        {/* Mobile: 3-dot icon */}
        <button
          className="md:hidden absolute -top-3 -right-2 text-white"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>


        {/* Desktop: always show */}
        <div className="hidden md:flex items-center space-x-4">
          {showGptSeatch && (
            <select
              className="bg-transparent text-white border border-white px-3 py-2 rounded-md hover:bg-white/20 cursor-pointer text-sm"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map(lang => (
                <option
                  key={lang.identifier}
                  className="bg-black text-white"
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="flex items-center gap-2 bg-transparent border border-white text-white px-3 py-2 rounded-md hover:bg-white/20 cursor-pointer text-sm"
            onClick={handleGptSearchClick}
          >
            {showGptSeatch ? "Home Page" : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
                </svg>
                Gpt Search
              </>
            )}
          </button>

          <img
            src={user?.photoURL}
            alt="User Icon"
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />

          <button
            onClick={handleSignOut}
            className="font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm transition"
          >
            Sign out
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute -right-4 top-2 bg-black/50 backdrop-blur-md rounded-lg shadow-lg w-64 z-50 md:hidden border border-white/10">
            <div className="px-2 py-4 space-y-4">
              <div className="flex justify-center">
                <img
                  src={user?.photoURL}
                  alt="User Icon"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
              </div>

              <select
                className="bg-black text-white border border-white px-3 py-2 rounded-md w-full text-sm focus:outline-none"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map(lang => (
                  <option
                    key={lang.identifier}
                    className="bg-black text-white"
                    value={lang.identifier}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>

              <button
                className="flex items-center gap-2 border border-white text-white px-3 py-2 w-full rounded-md hover:bg-white/20 text-sm transition"
                onClick={() => {
                  handleGptSearchClick();
                  setMenuOpen(false);
                }}
              >
                {showGptSeatch ? "Home Page" : "Gpt Search"}
              </button>

              <div className="flex justify-center">
                <button
                  onClick={handleSignOut}
                  className="w-24 font-bold text-white bg-red-600 hover:bg-red-700 py-3 rounded-md text-sm transition"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
