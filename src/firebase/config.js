import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDeTl24h5r6Ys-xXPCypidwV8q3pAr6rY4",
  authDomain: "catalogo-libros-2026.firebaseapp.com",
  projectId: "catalogo-libros-2026",
  storageBucket: "catalogo-libros-2026.firebasestorage.app",
  messagingSenderId: "885232246821",
  appId: "1:885232246821:web:759d0e295f36594526dfcc",
  measurementId: "G-Z131RN76C0"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)