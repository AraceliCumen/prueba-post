import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: process.env.apiKey || 'AIzaSyBjFRJHRxU_6YFoX2F15XLAzCByomTN3XE',
  authDomain: process.env.authDomain || 'prueba2-5e5bd.firebaseapp.com',
  databaseURL: process.env.databaseURL || 'prueba2-5e5bd',
  projectId: process.env.projectId ||  'prueba2-5e5bd',
  storageBucket: process.env.storageBucket || 'prueba2-5e5bd.appspot.com',
  messagingSenderId: process.env.messagingSenderId || '497666223373'
}

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
// const settings = {
//   timestampsInSnapshots: true
// }
// db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}





// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';
// import {initializeFirestore} from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.apiKey || 'AIzaSyATMZDbkZzt8fGlhEsYi576Yy-ugXbBC2A',
//   authDomain: process.env.authDomain || 'post-36bea.firebaseapp.com',
//   databaseURL: process.env.databaseURL || 'https://post-36bea-default-rtdb.firebaseio.com',
//   projectId: process.env.projectId ||  'post-36bea',
//   storageBucket: process.env.storageBucket || 'post-36bea.appspot.com',
//   messagingSenderId: process.env.messagingSenderId || '120758443240'
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });

// export {
//   db,
//   auth,
//   currentUser,
//   usersCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
// }



// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// // firebase init goes here
// const config = {
//   apiKey: process.env.apiKey || 'AIzaSyATMZDbkZzt8fGlhEsYi576Yy-ugXbBC2A',
//   authDomain: process.env.authDomain || 'post-36bea.firebaseapp.com',
//   databaseURL: process.env.databaseURL || 'https://post-36bea-default-rtdb.firebaseio.com',
//   projectId: process.env.projectId ||  'post-36bea',
//   storageBucket: process.env.storageBucket || 'post-36bea.appspot.com',
//   messagingSenderId: process.env.messagingSenderId || '120758443240'
// }

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);