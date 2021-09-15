// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {

    apiKey: "AIzaSyD91LjES2AyVEYCP61byD_0U67EkaTOXfg",
    authDomain: "crwn-db-ca92b.firebaseapp.com",
    projectId: "crwn-db-ca92b",
    storageBucket: "crwn-db-ca92b.appspot.com",
    messagingSenderId: "811327377657",
    appId: "1:811327377657:web:16de25c8ae435d7f355228",
    measurementId: "G-V4X97ZH77X"

};

const firebase = initializeApp(config);
export const auth = getAuth();
export const firestore = getFirestore(firebase);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export default firebase;