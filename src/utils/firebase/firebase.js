import { initializeApp } from 'firebase/app';

// Allowing Authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCF7hFSHQwYWYdAtne4Oe7HSA7oxPhd0Wc',
  authDomain: 'crown-clothing-5cd68.firebaseapp.com',
  projectId: 'crown-clothing-5cd68',
  storageBucket: 'crown-clothing-5cd68.appspot.com',
  messagingSenderId: '744506357644',
  appId: '1:744506357644:web:bd944bd4475af665ef48a9',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
