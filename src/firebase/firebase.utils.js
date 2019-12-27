import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyCl-h4A5l13l3t5NPyATfiBUuCowdcb5a0",
    authDomain: "crwn-db-62f9c.firebaseapp.com",
    databaseURL: "https://crwn-db-62f9c.firebaseio.com",
    projectId: "crwn-db-62f9c",
    storageBucket: "crwn-db-62f9c.appspot.com",
    messagingSenderId: "880398620311",
    appId: "1:880398620311:web:0289f4a2f84fe5a0427bd2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (err){
            console.log('error creating user', err.message)
        }
    }
    
    return userRef;
}
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;