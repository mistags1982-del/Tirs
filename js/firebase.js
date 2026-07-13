import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8uSq7IYdmIcLfg-Nx72KEc1dfvEjPZeg",
  authDomain: "tirs-adffb.firebaseapp.com",
  projectId: "tirs-adffb",
  storageBucket: "tirs-adffb.firebasestorage.app",
  messagingSenderId: "831578159486",
  appId: "1:831578159486:web:0bee8e9f8b75fdbc491b2f",
  measurementId: "G-JXPD795YG5"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const ADMIN_EMAIL = "fdm42143@gmail.com";
