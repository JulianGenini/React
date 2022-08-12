// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

/* The configuration of the firebase app. */
const firebaseConfig = {
  apiKey: "AIzaSyDyD2FWogFk0EoX0roH1nhGM6yKFNTWQMM",
  authDomain: "resto-reserva.firebaseapp.com",
  projectId: "resto-reserva",
  storageBucket: "resto-reserva.appspot.com",
  messagingSenderId: "360500773144",
  appId: "1:360500773144:web:41295b6483db929847de6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireBaseConnections = () => app