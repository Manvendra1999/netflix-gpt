import React, { useState, useRef } from 'react'
import Header from './Header'
import { auth } from '../utils/Firebase.js';
import { checkValidData } from '../utils/Validates';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice.js';
import { useDispatch } from 'react-redux';
import { USER_AVTAR } from '../utils/constants.js';
const Login = () => {
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMassage, setErrorMassage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        //  checkValidData(email, password);  
        // console.log(email.current.value)
        // console.log(password.current.value)

        const massage = checkValidData(email.current.value, password.current.value);
        setErrorMassage(massage);
        if (massage) return;
        // sign in sign up logic
        if (!isSignInForm) {
            // Sign up Logic 
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVTAR
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                    }).catch((error) => {
                        setErrorMassage(error.massage)
                    });
                    // console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMassage(errorCode + "-" + errorMessage)
                });
        }
        else {
            // Sign in Logic 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                    // console.log(user)
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMassage(errorCode + "-" + errorMessage)
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
                    alt="Netflix Logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute p-10 bg-black w-96 my-36 mx-auto right-0 left-0 text-white opacity-85 rounded-sm'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="name"
                        placeholder="Full Name"
                        className='p-2 my-4 w-full bg-gray-700' />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email or Phone Number"
                    className='p-2 my-4 w-full bg-gray-700' />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-2 my-4 w-full bg-gray-700" />

                <p className='text-red-500 font-medium text-lg pb-4'>
                    {errorMassage}</p>

                <button
                    className="p-2 y-6 bg-red-600 w-full rounded-md"
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                {/* <p className='py-4 cursor-pointer'
                    onClick={toggleSignInForm}>
                    {isSignInForm ? (
                        <>
                            New to Netflix?{" "}
                            <span style={{ color: "red", fontWeight: "bold" }}>Sign Up</span> Now
                        </>
                    ) : (
                        <>
                            Already registered?{" "}
                            <span style={{ color: "red", fontWeight: "bold" }}>Sign In</span> Now
                        </>
                    )}

                </p> */}

                <p className="py-4">
                    {isSignInForm ? (
                        <>
                            New to Netflix?{" "}
                            <span
                                style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
                                onClick={toggleSignInForm}
                            >
                                Sign Up
                            </span>{" "}
                            Now
                        </>
                    ) : (
                        <>
                            Already registered?{" "}
                            <span
                                style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
                                onClick={toggleSignInForm}
                            >
                                Sign In
                            </span>{" "}
                            Now
                        </>
                    )}
                </p>

            </form>
        </div>
    )
}

export default Login
