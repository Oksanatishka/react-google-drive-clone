import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAoC5-jznMIa8RQmF7eB2pqBu_pqC8jEUc",
    authDomain: "drive-clone-project-b385c.firebaseapp.com",
    projectId: "drive-clone-project-b385c",
    storageBucket: "drive-clone-project-b385c.appspot.com",
    messagingSenderId: "198229213957",
    appId: "1:198229213957:web:b0ff7d5d1a23c0a4f72d6c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }