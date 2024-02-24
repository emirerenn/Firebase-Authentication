import db from "./firebaseInit";

interface User {
    email: string;
    username: string;
    password: string;
}

export async function addUser(user: User): Promise<void> {
    try {
        const newUserRef = await db.collection('users').doc();
        await newUserRef.set(user);
        console.log('User added successfully!');
    } catch (error) {
        console.error('Error adding user: ', error);
    }
}
export async function loginUser(email: string, password: string): Promise<string | undefined> {
    try {
      const userQuerySnapshot = await db.collection('users').where('email', '==', email).where('password', '==', password).get();
      if (!userQuerySnapshot.empty) {
        const userDoc = userQuerySnapshot.docs[0];
        return userDoc.id;
      } else {
        console.log('User not found');
        return undefined;
      }
    } catch (error) {
      console.error('User login error: ', error);
      return undefined;
    }
  }
export async function getUser(userId: string): Promise<User | undefined> {
    try {
        const userSnapshot = await db.collection('users').doc(userId).get();
        if (userSnapshot.exists) {
            const userData = userSnapshot.data() as User;
            if (userData) {
                return userData;
            }
        } else {
            console.log('User not found.');
            return undefined;
        }
    } catch (error) {
        console.error('Error retrieving user data: ', error);
        return undefined;
    }
}

export async function deleteUser(userId: string): Promise<void> {
    try {
        const userDoc = await db.collection('users').doc(userId).get();

        if (!userDoc.exists) {
            console.log("User not found with ID:", userId);
            return;
        }

        await db.collection('users').doc(userId).delete();
        console.log("User deleted successfully");
    } catch (error) {
        console.error("User deleting error: ", error);
    }
}


export async function findUserByEmail(email: string): Promise<string | undefined> {
    try {
        const querySnapshot = await db.collection('users').where('email', '==', email).get();

        if (!querySnapshot.empty)
        {
            const user = querySnapshot.docs[0];
            return user.id;
        }
        else {
            console.log("User not found");
            return undefined;
        }
    }
    catch (error)
    {
        console.error("Error searching for user: " + error);
        return undefined;
    }
}