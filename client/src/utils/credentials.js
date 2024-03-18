// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2oAr6P-4RUnKLK0n2x0jsusuAh4_KagI",
  authDomain: "electroventasauthetification.firebaseapp.com",
  projectId: "electroventasauthetification",
  storageBucket: "electroventasauthetification.appspot.com",
  messagingSenderId: "159775144456",
  appId: "1:159775144456:web:000c584761a348a991afbd",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
const DB = getFirestore(Firebase);
//const auth = getAuth(app);

//export { auth };

//export default Firebase;
export { Firebase, DB };
