import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { FirebaseError } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";

export const signUpUser = (name: string, email: string, password: string, type:string,  setError: React.Dispatch<React.SetStateAction<string>>) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name,
            })
            .catch((error: FirebaseError) => authError(error, setError));

            //sets new user document in firestore
            const db = getFirestore();
            setDoc(doc(db, "users", userCredential.user.uid), {
                name: name,
                email: email,
                type: type,
                club: null,
                mood: 3,
                progress: Math.random()
              }).catch((error: FirebaseError) => authError(error, setError));
        })
        .catch((error: FirebaseError) => authError(error, setError));
};


  
export const signInUser = (email: string, password: string, setError: React.Dispatch<React.SetStateAction<string>>) => {
    signInWithEmailAndPassword(auth, email, password).catch((error: FirebaseError) => authError(error, setError));
};

export const signOutUser = (setError: React.Dispatch<React.SetStateAction<string>>) => {
    signOut(auth).catch((error: FirebaseError) => authError(error, setError));
};

const authError = (error: FirebaseError, setError: React.Dispatch<React.SetStateAction<string>>) => {
    const errorCode: string = error.code;
    setError(errorCode.split('/')[1].replace(/-/g, ' '));
};