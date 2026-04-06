import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getAnalytics, isSupported } from "firebase/analytics";

// ⚙️ Config du projet JOLAB360
const firebaseConfig = {
  apiKey: "AIzaSyC-7r82RBTZWulayoiRHqixIg18TDz_2lE",
  authDomain: "jolab360-13342.firebaseapp.com",
  projectId: "jolab360-13342",
  storageBucket: "jolab360-13342.firebasestorage.app",
  messagingSenderId: "383047082401",
  appId: "1:383047082401:web:513b462abc0569aa566be0",
  measurementId: "G-EP0M14YEC6",
};

// 🔥 Init Firebase
const app = initializeApp(firebaseConfig);

// 🔎 Firestore
export const db = getFirestore(app);

// ✅ Storage
export const storage = getStorage(app, "gs://jolab360-13342.firebasestorage.app");

// ☁️ Cloud Functions
export const functions = getFunctions(app, "us-central1");

// 👤 Auth
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.error("Erreur de persistance auth:", err);
});

// 📊 Analytics (optionnel, navigateur seulement)
export let analytics = null;
isSupported().then((yes) => {
  if (yes) analytics = getAnalytics(app);
});

export default app;