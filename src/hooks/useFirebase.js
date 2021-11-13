import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
initializeFirebase()
const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

//Google handler
const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    //register handling
    const  registerNewUser = (email, password,name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            // save user to the database
                saveUser(email, name, 'POST');
             // send name to firebase after creation
            updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
            history.replace('/');
            
        })
        .catch(error => {
           setAuthError(error.message); 
        })
        .finally(() => setIsLoading(false));
    }
    //Login user
    const loginUser = (email, password, location, history) =>{
    setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
                    const user = result.user;
                    console.log(user);
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                    setAuthError('');
                })
                .catch(error => {
                setAuthError(error.message); 
                })
                .finally(() => setIsLoading(false));
        }
    //signOut
const logOut = () =>{
    setIsLoading(true);
      signOut(auth)
      .then(() =>{
          setUser({});
      })
      .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
  }
    //Observer user state
  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
  }else{
      setUser({})
  }
  setIsLoading(false);
});
return () => unsubscribed;
  }, []);

  const saveUser = (email, displayName, method) => {
          const user = {email, displayName};
          fetch('https://floating-bastion-71805.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
  }
return {
    user, isLoading, signInUsingGoogle, authError, registerNewUser, loginUser, logOut 
        }
}
export default useFirebase;