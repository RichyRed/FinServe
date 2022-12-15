import  firebase  from 'firebase/compat/app';
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCuHtVxDqpxhkaVHaU_JIsi0LTJLvEJ-Tc",
  authDomain: "aguilarrojas-5f49c.firebaseapp.com",
  projectId: "aguilarrojas-5f49c",
  storageBucket: "aguilarrojas-5f49c.appspot.com",
  messagingSenderId: "673480745286",
  appId: "1:673480745286:web:e10087f097dd088d2d0547"
};

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db