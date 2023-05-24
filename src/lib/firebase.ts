import * as firebase from "firebase/app";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAl8CpTIcwjTYNwPkzMTt_js_SFY5dJJ90",
  authDomain: "ceafwebdb.firebaseapp.com",
  projectId: "ceafwebdb",
  storageBucket: "ceafwebdb.appspot.com",
  messagingSenderId: "796499726833",
  appId: "1:796499726833:web:4dc8bf7abc1bc956f33450"
})


// Initialize Firebase
export default app;
export {app};