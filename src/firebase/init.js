// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3cHnpftiZOu1xe7bOO12UAMC-yo31zsY",

  authDomain: "gif-stash.firebaseapp.com",

  projectId: "gif-stash",

  storageBucket: "gif-stash.appspot.com",

  messagingSenderId: "800001969947",

  appId: "1:800001969947:web:6c9dd37849edef28f14dbe"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
