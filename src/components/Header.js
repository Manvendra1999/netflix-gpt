import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { auth } from '../utils/Firebase';
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const user = useSelector(store => store.user)
  // console.log("userrrrr", user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    })
      .catch((error) => {
        nevigate("/error");
      });

  }

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

const  handleGptSearchClick = () => {
  dispatch(toggleGptSearchView());
  
}

  return (
    // <div className='absolute w-full px-6 py-2 bg-gradient-to-b from-black z-30 flex justify-between items-center'>
    //   <img className='w-48' src={LOGO} alt="logo" />
    //   {user && (<div className='flex p-2'>
    //     <button> GPT Search</button>
    //     <img src={user?.photoURL} alt="usericon" className='w-14 h-14 p-1 rounded-full inline-block mr-4"' />
    //     <button onClick={handleSignOut} className='font-bold text-white bg-red-600 p-2 h-12 rounded-md'>Sign out</button>

    //   </div>)}
    // </div>


    <div className="absolute w-full px-6 py-3 bg-gradient-to-b from-black z-30 flex justify-between items-center">
      <img className="w-44 md:w-48" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex items-center space-x-4">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          onClick={handleGptSearchClick}>
           🔍 GPT Search
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
