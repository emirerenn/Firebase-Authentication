import * as admin from "firebase-admin";
import * as serviceAccount from "./serviceAccount.json";

try {
    
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
        databaseURL: 'https://your-project-id.firebaseio.com'
    });

    console.log("Firebase Initialize Successful.");
}
catch (err) {
    console.error("Firebase Initialize Error: " + err);
}


const db = admin.firestore();

export default db;