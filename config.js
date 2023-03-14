 
 import firebase from "firebase";
 const firebaseConfig = {
  apiKey: "AIzaSyAXtzN6jy7akSs6i1uZrA6dby5z_-1BcoU",
  authDomain: "apptarefas-5736a.firebaseapp.com",
  projectId: "apptarefas-5736a",
  storageBucket: "apptarefas-5736a.appspot.com",
  messagingSenderId: "617528148968",
  appId: "1:617528148968:web:f0722022c60448260d5a5d"
};
firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()
export default database