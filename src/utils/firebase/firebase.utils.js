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
    addDoc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    serverTimestamp,
    orderBy,
    where,
    limit
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

export const getUserAccounts = async() => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    return querySnapshot.docs.map(doc => doc.data());
}



export const getBakedGoodsDocuments = async() => {
    const collectionRef = collection(db, 'bakedGoods')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const bakedGoodsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { id, name, desc, imageUrl, price } = docSnapshot.data()
        acc[id] = { id, name, desc, imageUrl, price }
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
    const userSnapshot = await getDoc(userDocRef);

    // If user does not exist, create user
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                role: 'user',
                ...additionalInfo
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userSnapshot;
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


// Get User Document Reference
export const getUserDocument = async(userId) => {
    const userRef = doc(db, `users/${userId}`);
    const userSnapshot = await userRef.get();
    return userSnapshot.data();
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


// Store cart items in Firestore
export const storeCartItems = async(currentUser, cartItems) => {
    if (!currentUser) return;

    const userRef = doc(db, 'users', currentUser.uid);
    const ordersRef = collection(db, 'orders');

    // Get the next order ID
    const orderRef = doc(ordersRef);
    const orderSnapshot = await getDocs(query(ordersRef, orderBy('orderId', 'desc'), limit(1)));
    const lastOrder = orderSnapshot.docs[0];
    const nextOrderId = lastOrder ? String(Number(lastOrder.data().orderId) + 1).padStart(4, '0') : '0001';



    // Calculate total cost of cart items
    const totalCost = cartItems.reduce((acc, cartItem) => {
        return acc + (cartItem.cost * cartItem.quantity);
    }, 0) + 50;

    const orderData = {
        orderId: nextOrderId,
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
        status: 'baking',
        totalCost: totalCost // Add totalCost field to orderData object
    };
    await setDoc(orderRef, orderData);

    const itemsRef = collection(orderRef, 'items');
    const batch = writeBatch(db);

    console.log('Cart items:', cartItems);
    cartItems.forEach((cartItem) => {
        const { priceId, productName, productImage, cost, qty, quantity, additionalInstruction } = cartItem;
        const itemRef = doc(itemsRef);
        batch.set(itemRef, { priceId, productName, productImage, cost, qty, quantity, additionalInstruction });
    });

    await batch.commit();
    console.log('Cart items added as an order to Firestore');
};



// Retrieve cart items from Firestore
export const getCartItems = async(currentUser) => {
    if (!currentUser) return [];

    const ordersRef = collection(db, 'orders');
    const querySnapshot = await getDocs(query(ordersRef, where('userId', '==', currentUser.uid)));

    const orders = [];
    for (const doc of querySnapshot.docs) {
        const itemsRef = collection(doc.ref, 'items');
        const itemsSnapshot = await getDocs(itemsRef);
        const cartItems = itemsSnapshot.docs.map((doc) => doc.data());
        const order = {
            orderId: doc.data().orderId,
            createdAt: doc.data().createdAt,
            status: doc.data().status,
            totalCost: doc.data().totalCost, // Add totalCost field to order object
            cartItems,
        };
        orders.push(order);
    }

    return orders;
};