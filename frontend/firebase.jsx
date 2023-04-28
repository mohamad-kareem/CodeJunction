import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.FIRE_BASE_KEY,
  authDomain: "code-junction-f5968.firebaseapp.com",
  projectId: "code-junction-f5968",
  storageBucket: "code-junction-f5968.appspot.com",
  messagingSenderId: "272523165476",
  appId: "1:272523165476:web:41ef8bbb94467905783db1",
  measurementId: "G-T11GX9YY5X"
};

const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)