import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyCHzAO1NhUptz04NghDpEneruu7EunBvmw',
  authDomain: 'project-management-26957.firebaseapp.com',
  projectId: "project-management-26957",
  storageBucket: "project-management-26957.appspot.com",
  messagingSenderId: "855490773695",
  appId: "1:855490773695:web:1a963b28f4d6b4a6dbfc0a",
  measurementId: "G-H805RN16K0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, doc, getDoc, setDoc, updateDoc, increment };
