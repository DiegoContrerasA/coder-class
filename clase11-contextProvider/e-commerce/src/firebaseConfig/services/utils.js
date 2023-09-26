import { Timestamp } from 'firebase/firestore'

export const getTimeStamp = () => Timestamp.fromDate(new Date())
