// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-react-upload-354b9.firebaseapp.com",
  databaseURL:"gs://fir-react-upload-354b9.appspot.com",
  projectId: "fir-react-upload-354b9",
  storageBucket: "fir-react-upload-354b9.appspot.com",
  messagingSenderId: "540282243093",
  appId: "1:540282243093:web:779b892de803665ea6261c",
  measurementId: "G-C3FL6CSPFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export default storage