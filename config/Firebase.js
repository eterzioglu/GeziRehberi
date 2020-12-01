
import * as firebase from 'firebase';

import 'firebase/firestore';

try {
  firebase.initializeApp({
    apiKey: "AIzaSyB2kcMA9X8PbpYSplRtTGcSNG642TbU9r0",
    authDomain: "finans-86728.firebaseapp.com",
    databaseURL: "https://finans-86728.firebaseio.com",
    projectId: "finans-86728",
    storageBucket: "finans-86728.appspot.com",
    messagingSenderId: "449595094439",
    appId: "1:449595094439:web:bdfbf9fc8ce5e51c767282"
  })
  } catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!/already exists/.test(err.message)) {
  console.error( err.stack)
  }}
  const Firebase= firebase;


export default Firebase