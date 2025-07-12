import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuXfSKP6oW8k69gBYaUNRO3iDfk0I9b0A",
  authDomain: "linked-in-clone-by-miku.firebaseapp.com",
  databaseURL: "https://linked-in-clone-by-miku-default-rtdb.firebaseio.com",
  projectId: "linked-in-clone-by-miku",
  storageBucket: "linked-in-clone-by-miku.firebasestorage.app",
  messagingSenderId: "497963389348",
  appId: "1:497963389348:web:615fd1b6f46ae66c77f131",
  measurementId: "G-DEC2MSS8MV"
};

// Initializing services
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);




export { app, auth, db,  }