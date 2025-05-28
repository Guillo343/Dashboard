import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "TU_ID_PROYECTO",
  storageBucket: "TU_BUCKET",
  messagingSenderId: "ID",
  appId: "ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
