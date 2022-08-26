import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMMamot0g651TktIkNmTTyiV2boLb-f_w",
    authDomain: "react-app-80b68.firebaseapp.com",
    projectId: "react-app-80b68",
    storageBucket: "react-app-80b68.appspot.com",
    messagingSenderId: "248548330953",
    appId: "1:248548330953:web:b2884d4dbbcb0f10026c18"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

// Clase de Firebase sin resolver
/* const indCollection = collection(firestoreDB, "indumentaria");
getDocs(indCollection).then(snapshot => {
    const docsData = snapshot.docs.map( doc => {
        return {...doc.data(), id: doc.id}
    });
    resolve (docsData);
    }); */