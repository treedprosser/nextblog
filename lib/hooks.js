import { auth, firestore } from '../lib/firebase';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Custom hook to read auth record and user profile doc
export function useUserData() {
    const [user] = useAuthState(auth);
    const [username, setUserName] = useState(null);

    useEffect(() => {
        // turn off real-time subscription
        let unsubscribe;

        if (user) {
            const ref = firestore.collection('users').doc(user.uid);
            unsubscribe = ref.onSnapshot((doc) => {
                setUserName(doc.data()?.username);
            });
        } else {
            setUserName(null);
        }

        return unsubscribe;
    }, [user]);

    return { user, username };
}