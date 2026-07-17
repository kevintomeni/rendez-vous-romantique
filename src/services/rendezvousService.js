import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

export async function enregistrerRendezVous({ dateChoisie, heureChoisie, repasChoisi }) {
  const docRef = await addDoc(collection(db, 'rendezvous'), {
    dateChoisie,
    heureChoisie,
    repasChoisi,
    creeLe: serverTimestamp()
  })
  return docRef.id
}
