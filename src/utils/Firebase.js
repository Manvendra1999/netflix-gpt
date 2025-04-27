// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8fCbYiNagr5I7hdoiUS8qZNSAld2tq5Y",
  authDomain: "netflixgpt-m07.firebaseapp.com",
  projectId: "netflixgpt-m07",
  storageBucket: "netflixgpt-m07.firebasestorage.app",
  messagingSenderId: "497898289237",
  appId: "1:497898289237:web:e74148650531c0e08cfcdc",
  measurementId: "G-Q62FNWJ5WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);







// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
 
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBJ0OXfo83eshQWtNc6LeUiir-P7THZSBY",
//   authDomain: "netflix-gpt-904b8.firebaseapp.com",
//   projectId: "netflix-gpt-904b8",
//   storageBucket: "netflix-gpt-904b8.firebasestorage.app",
//   messagingSenderId: "601613245259",
//   appId: "1:601613245259:web:54f5135188024428e0a6ce",
//   measurementId: "G-BRS3E82CJT"
// };
 
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 
// // Auth
// export const auth = getAuth();