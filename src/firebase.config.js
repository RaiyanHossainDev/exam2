import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVFyvN5MDiwiAatZDFigCOmzPsisrlTls",
  authDomain: "exam2-8f8a7.firebaseapp.com",
  projectId: "exam2-8f8a7",
  storageBucket: "exam2-8f8a7.firebasestorage.app",
  messagingSenderId: "269907899274",
  appId: "1:269907899274:web:d7d5d07bffbf158d7e4e73"
};

const app = initializeApp(firebaseConfig);

export default app