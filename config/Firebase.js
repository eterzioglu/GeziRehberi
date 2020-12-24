
import * as firebase from 'firebase';

import 'firebase/firestore';

try {
  firebase.initializeApp({
    apiKey: "AIzaSyA9fmMAmwwV1d7HDL_YoM8AJ7Z_4vTJ_Qo",
    authDomain: "finans-a12c9.firebaseapp.com",
    projectId: "finans-a12c9",
    storageBucket: "finans-a12c9.appspot.com",
    messagingSenderId: "785089471567",
    appId: "1:785089471567:web:3608f067ff7f8cf626363a",
    measurementId: "G-BYDKNM0NFB"
  })
  } catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!/already exists/.test(err.message)) {
  console.error( err.stack)
  }}



  const Firebase= firebase;


export default Firebase