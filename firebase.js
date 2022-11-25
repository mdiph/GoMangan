import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCEilU7_36dimSZ5zgMZqnMJZYV_Aij9mQ",
    authDomain: "gomangan-3347b.firebaseapp.com",
    projectId: "gomangan-3347b",
    storageBucket: "gomangan-3347b.appspot.com",
    messagingSenderId: "1014095855857",
    appId: "1:1014095855857:web:9efb52ca97656937d6e950"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  export default firebase;