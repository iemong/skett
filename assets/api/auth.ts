import * as firebase from 'firebase/app'

export const createUser = async (email: string, password: string): Promise<firebase.auth.UserCredential> =>
    await firebase.auth().createUserWithEmailAndPassword(email, password)

export const signInUser = async (email: string, password: string): Promise<firebase.auth.UserCredential> =>
    await firebase.auth().signInWithEmailAndPassword(email, password)

export const signInFacebook = async (): Promise<firebase.auth.UserCredential> => {
    const provider = new firebase.auth.FacebookAuthProvider()
    return await firebase.auth().signInWithPopup(provider)
}

export const signInTwitter = async (): Promise<firebase.auth.UserCredential> => {
    const provider = new firebase.auth.TwitterAuthProvider()
    return await firebase.auth().signInWithPopup(provider)
}

export const signOut = async (): Promise<void> => await firebase.auth().signOut()
