import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAuth } from '@firebase/auth-types';


const config ={
    apiKey: "AIzaSyA8oIhjdD729nz3ZBMGFJKpeXDLEQjC-n0",
    authDomain: "reactfirebase-2a905.firebaseapp.com",
    databaseURL: "https://reactfirebase-2a905.firebaseio.com",
    projectId: "reactfirebase-2a905",
    storageBucket: "reactfirebase-2a905.appspot.com",
    messagingSenderId: "121617624892"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }


  const auth = firebase.auth();

export {
    auth,
};
