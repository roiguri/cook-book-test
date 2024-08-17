// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx23P7ruwizOjIfJHqhjZOIG5V7E_53Sk",
  authDomain: "cook-book-test-479e8.firebaseapp.com",
  projectId: "cook-book-test-479e8",
  storageBucket: "cook-book-test-479e8.appspot.com",
  messagingSenderId: "521454028338",
  appId: "1:521454028338:web:97104163823838a9dd9e2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize FireStore
const db = getFirestore(app);

export { auth, db };