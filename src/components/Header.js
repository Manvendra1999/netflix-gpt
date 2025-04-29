import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { auth } from '../utils/Firebase';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSeatch = useSelector((store) => store.gpt.showGptSeatch);

  console.log("userrrrr111", showGptSeatch)

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

  const handleLanguageChange = (e) =>{
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  };

  return (
    <div className="absolute w-full px-6 py-3 bg-gradient-to-b from-black z-30 flex justify-between items-center">
      <img className="w-44 md:w-48" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex items-center space-x-4">

          {showGptSeatch && <select
            className="bg-transparent text-white border border-white px-2 py-2 rounded-md hover:bg-white/20 cursor-pointer"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} className="bg-black text-white" value={lang.identifier}>{lang.name}</option>
            )}
          </select>}

          <button className="flex items-center gap-2 bg-transparent border border-white text-white px-2 py-2 rounded-md hover:bg-white/20 cursor-pointer"
            onClick={handleGptSearchClick}>
            {showGptSeatch?  "Home Page" : <> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
            </svg>Gpt Search</>}
          </button>
          <img
            src={user?.photoURL}
            alt="User Icon"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
          >
            Sign out
          </button>
        </div>
      )}
    </div>

  )
}

export default Header
