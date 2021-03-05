import { firestoreAction } from 'vuexfire'
import { firestoredb } from '@/plugins/firebase'

const robovoyageRef = firestoredb
  .collection('robovoyage')
  .doc('EWJQ4H3MZyt1Vkd6Xd0A')

export const state = () => ({
  robovoyage: {}
})

export const actions = {
  setRobovoyageRef: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('robovoyage', robovoyageRef)
  })
}
