// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdsoOpupCoQICIFR943wDp7jOrROwZX00",
  authDomain: "portfolionew-20d12.firebaseapp.com",
  projectId: "portfolionew-20d12",
  storageBucket: "portfolionew-20d12.appspot.com",
  messagingSenderId: "625390979784",
  appId: "1:625390979784:web:38fef596a4fb4a7a23f3fd",
  measurementId: "G-XY8FS9DWMQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
