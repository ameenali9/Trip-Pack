import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// REACT_APP_API_KEY=AIzaSyDRBy0GIMN7DjgX-eNW4z4aDOnXXXsfSF0
// REACT_APP_AUTH_DOMAIN=react-auth-8878a.firebaseapp.com
// REACT_APP_DATABASE_URL=https://react-auth-8878a.firebaseio.com
// REACT_APP_PROJECT_ID=react-auth-8878a
// REACT_APP_STORAGE_BUCKET=react-auth-8878a.appspot.com
// REACT_APP_MESSAGING_SENDER_ID=585657158512

// AIzaSyAfipm-pJ4XqZqUX5rNRJbbVDLHQEi0hio
// trippack-17b0c.firebaseapp.com
// https://trippack-17b0c.firebaseio.com
// trippack-17b0c
// 406007683159

var config = {
  apiKey: "AIzaSyDRBy0GIMN7DjgX-eNW4z4aDOnXXXsfSF0",
  authDomain: "react-auth-8878a.firebaseapp.com",
  databaseURL: "https://react-auth-8878a.firebaseio.com",
  projectId: "react-auth-8878a",
  storageBucket: "react-auth-8878a.appspot.com",
  messagingSenderId: "585657158512",
};
// firebase.initializeApp(config);
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;
