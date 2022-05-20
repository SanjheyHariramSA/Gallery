import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD3GD-UXQb696GUneM1dlPxUFAaZQ1N3EE",
  authDomain: "gallery-8266f.firebaseapp.com",
  projectId: "gallery-8266f",
  storageBucket: "gallery-8266f.appspot.com",
  messagingSenderId: "176649955991",
  appId: "1:176649955991:web:d98b567ea2cd0124b317d2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
