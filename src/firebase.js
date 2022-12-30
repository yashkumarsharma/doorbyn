import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Todo: Add this securly
const firebaseConfig = {
  apiKey: "AIzaSyAbO5m45xb689jrfpXkzleYg3si2Ds0iFc",
  authDomain: "doorbyn---pet.firebaseapp.com",
  projectId: "doorbyn---pet",
  storageBucket: "doorbyn---pet.appspot.com",
  messagingSenderId: "239459696983",
  appId: "1:239459696983:web:47423503473509bdda3e12",
  measurementId: "G-64ZWQW5X66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);