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
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();