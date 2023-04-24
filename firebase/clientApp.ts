import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAl8CpTIcwjTYNwPkzMTt_js_SFY5dJJ90",
    authDomain: "ceafwebdb.firebaseapp.com",
    projectId: "ceafwebdb",
    storageBucket: "ceafwebdb.appspot.com",
    messagingSenderId: "796499726833",
    appId: "1:796499726833:web:4dc8bf7abc1bc956f33450"
  };
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export default app;
