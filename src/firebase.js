import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-9ivGkyzAKllouh6d1Qu8lu4ixbQFRqE",
  authDomain: "fir-8c9ae.firebaseapp.com",
  projectId: "fir-8c9ae",
  storageBucket: "fir-8c9ae.appspot.com",
  messagingSenderId: "1073538685058",
  appId: "1:1073538685058:web:7e70bf0441752237ad7c9b"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);