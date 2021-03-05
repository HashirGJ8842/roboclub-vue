import { firestoreAction } from 'vuexfire'
import { firestoreDb } from '@/plugins/firebase'

const roboconRef = firestoreDb.collection('robocon').doc('current')

export const state = () => ({
  robocon: {}
})

export const actions = {
  setRoboconRef: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('robocon', roboconRef)
  })
}
