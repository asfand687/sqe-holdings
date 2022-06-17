import { initializeApp } from 'firebase/app'
import { getAuth } from '@firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQXQrZ188mFtS18eSVhIgulpZQrztt8vw",
  authDomain: "fir-tutorial-79e2b.firebaseapp.com",
  projectId: "fir-tutorial-79e2b",
  storageBucket: "fir-tutorial-79e2b.appspot.com",
  messagingSenderId: "787457458224",
  appId: "1:787457458224:web:3a25b3d350fcc13b0e6df5",
  measurementId: "G-ELB2T30J7D"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app