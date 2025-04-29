console.log("🔥 Firebase App Started!");

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtQT64t3_IHdqBc8UhqXrX3XmmlYPe7Dk",
  authDomain: "notesapp-cd5b8.firebaseapp.com",
  projectId: "notesapp-cd5b8",
  storageBucket: "notesapp-cd5b8.firebasestorage.app",
  messagingSenderId: "747124290846",
  appId: "1:747124290846:web:92b5e3b8faf47e9b6cc50f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up function
window.signUp = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "✅ Sign Up Successful!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "❌ " + error.message;
    });
};

// Log In function
window.logIn = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "✅ Login Successful!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "❌ " + error.message;
    });
};

// Log Out function
window.logOut = function () {
  signOut(auth)
    .then(() => {
      document.getElementById("message").innerText = "👋 Logged Out!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "❌ " + error.message;
    });
};
