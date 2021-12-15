import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "resto-loc.firebaseapp.com",
  projectId: "resto-loc",
  storageBucket: "resto-loc.appspot.com",
  messagingSenderId: "847654435271",
  appId: "1:847654435271:web:8876f82c10d5d4b8aa41e2",
  measurementId: "G-3GYNDQ3TFT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

