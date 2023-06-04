
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";




const firebaseConfig = {
  apiKey: "AIzaSyAnp60C8eSxnT27TT7eeUHicrxK1ftZISE",

  authDomain: "auth-3bf63.firebaseapp.com",

  databaseURL: "https://auth-3bf63-default-rtdb.firebaseio.com",

  projectId: "auth-3bf63",

  storageBucket: "auth-3bf63.appspot.com",

  messagingSenderId: "930250104762",

  appId: "1:930250104762:web:2dccc853d78dae834f0783"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

