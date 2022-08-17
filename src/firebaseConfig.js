import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: process.env.apiKey || 'AIzaSyD0W_Tf9zeowsmwGh2Y_1IFizoShVIeTL8',
  authDomain: process.env.authDomain ||  'prueba-ae108.firebaseapp.com',
  databaseURL: process.env.databaseURL ||  'prueba-154d8-default-rtb.firebaseio.com',
  projectId: process.env.projectId ||  'prueba-ae108',
  storageBucket: process.env.storageBucket  ||  'prueba-ae108.appspot.com',
  messagingSenderId: process.env.messagingSenderId ||  'G-XBDJEDJ6M2'
}

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

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
