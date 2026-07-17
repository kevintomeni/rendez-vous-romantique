import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCKmD2yZfZI3usb2_26pSv2diZkFd9Ud4Q",
  authDomain: "rendez-vous-romantique.firebaseapp.com",
  projectId: "rendez-vous-romantique",
  storageBucket: "rendez-vous-romantique.firebasestorage.app",
  messagingSenderId: "723418369828",
  appId: "1:723418369828:web:d1ed67eb5b898dc8c42db1"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
