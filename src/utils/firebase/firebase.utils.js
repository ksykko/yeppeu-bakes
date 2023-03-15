import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    FacebookAuthProvider,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCXk1LKFJNIu2NXWkTN0mHPf-Fml9u26aw",
    authDomain: "ischool-fb1ba.firebaseapp.com",
    projectId: "ischool-fb1ba",
    storageBucket: "ischool-fb1ba.appspot.com",
    messagingSenderId: "970554853632",
    appId: "1:970554853632:web:d708c34657c4ea9ed88be5",
    measurementId: "G-5RF7C6HHS7"
};


const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);


// Initialize Google Auth Provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});


// Initialize Auth
export const auth = getAuth();

// Sign in with Google
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


// Initialize Firestore
export const db = getFirestore();


// Create user profile document
export const createUserProfileDocumentFromAuth = async(
    userAuth,
    additionalInfo = {}

) => {

    // Check if userAuth is valid
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());


    // If user does not exist, create user
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userDocRef;
}


// Create user with email and password
export const createAuthUserWithEmailAndPassword = async(email, password) => {

    // Check if email and password have been provided
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}


// Signin with email and password
export const signInAuthUserWithEmailAndPassword = async(email, password) => {

    // Check if email and password have been provided, if not, display alert and return
    if (!email || !password) {
        alert('Please provide email and password');
        return;
    }

    return await signInWithEmailAndPassword(auth, email, password)
}


// Initialize Facebook Auth Provider
const facebookProvider = new FacebookAuthProvider();


// Sign in with Facebook
export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);


// Sign out
export const signOutUser = async() => await signOut(auth)


// Check if user is signed in
export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback)