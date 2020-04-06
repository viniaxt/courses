import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import config from './config.js'

// function that allow us to take users auth object that we got back from
// the authentication library and store in our db
export const createUserProfileDocument = async (userAuthObject, additionalData) => {
  if (!userAuthObject) return

  const userRef = firestore.doc(`users/${userAuthObject.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuthObject
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user ", error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

// exporting authentication method
export const auth = firebase.auth()

export const firestore = firebase.firestore()

// access to google auth provider authentication library
const provider = new firebase.auth.GoogleAuthProvider()

// trigger google pop-up custom parameter
provider.setCustomParameters({ prompt: 'select_account' })

// here, we can create multiple types of pop-ups (i.e.: twitter, google, ...)
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase