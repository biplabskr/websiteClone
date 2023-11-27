
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC-lDAwfZd63PhLjKrAzyKhKE8c6ImGYBQ",
  authDomain: "react-netflix-duplicate.firebaseapp.com",
  projectId: "react-netflix-duplicate",
  storageBucket: "react-netflix-duplicate.appspot.com",
  messagingSenderId: "1048075611664",
  appId: "1:1048075611664:web:ffefa7f61c6581eaa62495",
  measurementId: "G-HGXQGNRP0R"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);