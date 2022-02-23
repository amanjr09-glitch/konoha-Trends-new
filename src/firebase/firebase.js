import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { signInWithPopup , GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAWHbZZKsBcU9QOFPBmtEobzIl0sLkv1qo",
  authDomain: "konoha-sign-up.firebaseapp.com",
  projectId: "konoha-sign-up",
  storageBucket: "konoha-sign-up.appspot.com",
  messagingSenderId: "853271256369",
  appId: "1:853271256369:web:ce667e0c12277bb6e76410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);