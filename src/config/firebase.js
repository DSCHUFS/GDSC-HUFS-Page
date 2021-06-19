import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCkO47r4YeW7NRdJbtccD4tkUPiDOBPzfM",
  authDomain: "gdsc-hufs.firebaseapp.com",
  projectId: "gdsc-hufs",
  storageBucket: "gdsc-hufs.appspot.com",
  messagingSenderId: "178307825244",
  appId: "1:178307825244:web:fe3477ca17e1d17ff1b099",
  measurementId: "G-XH0YBFLL7Q"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};