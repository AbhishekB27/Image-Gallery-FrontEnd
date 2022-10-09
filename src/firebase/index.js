import{ initializeApp } from 'firebase/app';
import {getStorage} from'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbqQRunAzyoh9XSFpuCG9HI9Jdzp_xGvg",
    authDomain: "fir-react-upload-354b9.firebaseapp.com",
    projectId: "fir-react-upload-354b9",
    storageBucket: "fir-react-upload-354b9.appspot.com",
    messagingSenderId: "540282243093",
    appId: "1:540282243093:web:779b892de803665ea6261c",
    measurementId: "G-C3FL6CSPFZ"
  };

 const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
export {app,storage}