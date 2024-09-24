// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore, collection} from "firebase/firestore";
// import {getAuth} from "firebase/auth"

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCUpZ1RYXSMKZHDXyv8aBHeUKOi4eloJNQ",
//   authDomain: "expensify-c3580.firebaseapp.com",
//   projectId: "expensify-c3580",
//   storageBucket: "expensify-c3580.appspot.com",
//   messagingSenderId: "367180997910",
//   appId: "1:367180997910:web:f4990100904c58ceb25c37"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// export const auth = getAuth(app)

// export const tripRef = collection(db, "trips")
// export const expensesRef = collection(db, "expenses")

// export default app;

// import {initializeApp} from 'firebase/app';
// import {getFirestore, collection} from 'firebase/firestore';
// import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCUpZ1RYXSMKZHDXyv8aBHeUKOi4eloJNQ",
//   authDomain: "expensify-c3580.firebaseapp.com",
//   projectId: "expensify-c3580",
//   storageBucket: "expensify-c3580.appspot.com",
//   messagingSenderId: "367180997910",
//   appId: "1:367180997910:web:f4990100904c58ceb25c37"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Use AsyncStorage for auth persistence
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// export const db = getFirestore(app);
// export const tripRef = collection(db, 'trips');
// export const expensesRef = collection(db, 'expenses');

// export default app;


import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


 const firebaseConfig = {
   apiKey: "AIzaSyCUpZ1RYXSMKZHDXyv8aBHeUKOi4eloJNQ",
   authDomain: "expensify-c3580.firebaseapp.com",
   projectId: "expensify-c3580",
   storageBucket: "expensify-c3580.appspot.com",
   messagingSenderId: "367180997910",
   appId: "1:367180997910:web:f4990100904c58ceb25c37"
 };

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const tripRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");

export default app;

