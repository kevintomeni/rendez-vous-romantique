import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "REMPLACER_PAR_TA_CLE",
  authDomain: "REMPLACER_PAR_TON_PROJET.firebaseapp.com",
  projectId: "REMPLACER_PAR_TON_PROJET",
  storageBucket: "REMPLACER_PAR_TON_PROJET.firebasestorage.app",
  messagingSenderId: "REMPLACER_PAR_TON_ID",
  appId: "REMPLACER_PAR_TON_APP_ID"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
