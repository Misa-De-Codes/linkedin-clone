import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVThbuI6nBx0YBlvDuDSPWtI-A7L_CckI",
  authDomain: "linkedin-f9ca5.firebaseapp.com",
  projectId: "linkedin-f9ca5",
  storageBucket: "linkedin-f9ca5.firebasestorage.app",
  messagingSenderId: "402525052120",
  appId: "1:402525052120:web:8fdd3e13a112e40c1f8bad",
  measurementId: "G-KW24N4ZF2J"
};

// Initializing services
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);




export { app, auth, db,  }