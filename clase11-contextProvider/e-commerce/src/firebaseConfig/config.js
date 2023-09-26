import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// base de datos de produccion
const firebaseConfig = {
  apiKey: 'AIzaSyDuXKpGW4qsVvon5cRr6Iaha3NrhbIGQ9g',
  authDomain: 'e-commerce-coderhouse-278fd.firebaseapp.com',
  projectId: 'e-commerce-coderhouse-278fd',
  storageBucket: 'e-commerce-coderhouse-278fd.appspot.com',
  messagingSenderId: '401625909707',
  appId: '1:401625909707:web:5333376456c4f35d42ce4e'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
