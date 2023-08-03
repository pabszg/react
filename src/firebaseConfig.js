import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAvpH2JJHj8oXIBVIqjS7KG9grBFqvVtaM",
  authDomain: "dummycommerce.firebaseapp.com",
  projectId: "dummycommerce",
  storageBucket: "dummycommerce.appspot.com",
  messagingSenderId: "231689394578",
  appId: "1:231689394578:web:f35e8a80fb92cbc76ac94b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)