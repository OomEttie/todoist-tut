import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAB_m_bBfZn6d1-JS9-Ycs4wQwe37S4MdQ',
  authDomain: 'todoist-d554e.firebaseapp.com',
  databaseURL: 'https://todoist-d554e-default-rtdb.firebaseio.com',
  projectId: 'todoist-d554e',
  storageBucket: 'todoist-d554e.appspot.com',
  messagingSenderId: '716852861852',
  appId: '1:716852861852:web:5465eef53abada393c8659',
  measurementId: 'G-RQHEG1TFL3',
})

export { firebaseConfig as firebase }
