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
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBGKXfZUPCLjbPU75wzg-y1fXV14XsTLuA",
    authDomain: "yeppeu-bakes.firebaseapp.com",
    projectId: "yeppeu-bakes",
    storageBucket: "yeppeu-bakes.appspot.com",
    messagingSenderId: "410729700077",
    appId: "1:410729700077:web:bca98795fb3e7eca5e0ae4",
    measurementId: "G-JJX0GLE8NW"
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


// Add collection and documents
export const addCollectionandDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.name.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log('Documents added to collection')

}



export const getBakedGoodsDocuments = async() => {
    const collectionRef = collection(db, 'bakedGoods')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const bakedGoodsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { id, name, desc, imageUrl1, imageUrl, price } = docSnapshot.data()
        acc[id] = { id, name, desc, imageUrl1, imageUrl, price }
        return acc

    }, {})

    return bakedGoodsMap
}


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