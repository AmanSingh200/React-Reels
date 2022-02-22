import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI307BPuSWxiYEAu75tqFSMf3_r8XeRo0",
  authDomain: "reels-8e2d1.firebaseapp.com",
  projectId: "reels-8e2d1",
  storageBucket: "reels-8e2d1.appspot.com",
  messagingSenderId: "345429715115",
  appId: "1:345429715115:web:522f194e1dcb8953702fee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()