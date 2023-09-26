import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from 'firebaseConfig/config'

export const uploadFile = async (img) => {
  const storageRef = ref(storage, `images/${Date.now()}-${img.name}`)
  await uploadBytes(storageRef, img)
  const url = await getDownloadURL(storageRef)
  return url
}
