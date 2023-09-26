import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'firebaseConfig/config'

export const signUp = async ({ email: _email, password }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, _email, password)
    const { accessToken, email, uid } = user
    return { accessToken, email, uid }
  } catch {
    return null
  }
}

export const signIn = async ({ email: _email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, _email, password)
    const { accessToken, email, uid } = user
    return { accessToken, email, uid }
  } catch {
    return null
  }
}

export const logOut = () => signOut(auth)
