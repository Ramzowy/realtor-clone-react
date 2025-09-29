// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqVcslQN-VkxD2o2PqGI8jgLWWry2K-5U",
  authDomain: "realtor-clone-react-36f17.firebaseapp.com",
  projectId: "realtor-clone-react-36f17",
  storageBucket: "realtor-clone-react-36f17.firebasestorage.app",
  messagingSenderId: "1092940146831",
  appId: "1:1092940146831:web:e8b9fb5044b65decd5e8fa",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
