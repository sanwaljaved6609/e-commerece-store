// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAL581n_vdVNBKJVQkau6W1sLk92imOafo",
//   authDomain: "e-commerce-store-46ac5.firebaseapp.com",
//   projectId: "e-commerce-store-46ac5",
//   storageBucket: "e-commerce-store-46ac5.appspot.com",
//   messagingSenderId: "425745309942",
//   appId: "1:425745309942:web:7c506de0f1a373028a8cd7",
//   measurementId: "G-4ZJMVKX1BT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL581n_vdVNBKJVQkau6W1sLk92imOafo",
  authDomain: "e-commerce-store-46ac5.firebaseapp.com",
  projectId: "e-commerce-store-46ac5",
  storageBucket: "e-commerce-store-46ac5.appspot.com",
  messagingSenderId: "425745309942",
  appId: "1:425745309942:web:7c506de0f1a373028a8cd7",
  measurementId: "G-4ZJMVKX1BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
const auth = getAuth(app); // Initialize Firebase Auth

// Export auth to be used in other files
export { auth };
