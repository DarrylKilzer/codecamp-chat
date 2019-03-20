import firebaseconfig from "./firebaseconfig";
import firebase from 'firebase/app'
import 'firebase/firestore'



const firebaseApp = firebase.initializeApp(firebaseconfig)
const firestore = firebaseApp.firestore()
export default firestore