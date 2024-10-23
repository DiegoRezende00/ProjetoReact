import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzC_U2HcYTKHvbMc_Uy_KzfsYMUs11WUE",
  authDomain: "react-ecommerce2024.firebaseapp.com",
  projectId: "react-ecommerce2024",
  storageBucket: "react-ecommerce2024.appspot.com",
  messagingSenderId: "71753420151",
  appId: "1:71753420151:web:333269483b0ccfb40a2572",
};
//Em produção utilizamos variáveis de ambiente!!!

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
