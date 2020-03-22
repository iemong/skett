import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'

export const createUser = async (email: string, password: string): Promise<firebase.auth.UserCredential> =>
    await firebase.auth().createUserWithEmailAndPassword(email, password)

export const signInUser = async (email: string, password: string): Promise<firebase.auth.UserCredential> =>
    await firebase.auth().signInWithEmailAndPassword(email, password)

export const signInFacebook = async (): Promise<firebase.auth.UserCredential> => {
    const provider = new firebase.auth.FacebookAuthProvider()
    provider.addScope('user_link')
    const result = await firebase.auth().signInWithPopup(provider)
    const db = firebaseApp.firestore()
    const userDocRef = db.collection(COLLECTIONS.USERS).doc(result.user?.uid)
    const userInfo = {
        uid: result.user?.uid,
        displayName: result.user?.displayName,
        email: result.user?.email,
        photoURL: result.user?.photoURL,
        providerId: result.additionalUserInfo?.providerId,
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        link: result.additionalUserInfo?.profile?.link,
    }
    await userDocRef.set(userInfo).catch(error => {
        console.error(error)
    })
    return result
}

export const signInTwitter = async (): Promise<firebase.auth.UserCredential> => {
    const provider = new firebase.auth.TwitterAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    const db = firebaseApp.firestore()
    const userDocRef = db.collection(COLLECTIONS.USERS).doc(result.user?.uid)
    const userInfo = {
        uid: result.user?.uid,
        displayName: result.user?.displayName,
        email: result.user?.email,
        photoURL: result.user?.photoURL,
        providerId: result.additionalUserInfo?.providerId,
        userName: result.additionalUserInfo?.username,
    }
    await userDocRef.set(userInfo).catch(error => {
        console.error(error)
    })
    return result
}

export const signOut = async (): Promise<void> => await firebase.auth().signOut()
