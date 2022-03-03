import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initialApp from "../WebPages/Firebase/firebase.init";
//initialize firebase app
initialApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result.user);
    });
  };
  // sign up method
  const emailRegistration = (email, password, history, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        const user = userCredential.user;
        history.replace("/");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };
  // sign in method
  const signInUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        history.replace(destination);
        saveUser(user.email, user.displayName, "PUT");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://shrouded-mountain-85773.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
    // useEffect(() => {
    //   fetch(`https://shrouded-mountain-85773.herokuapp.com/users/${user.email}`)
    //     .then((res) => res.json())
    //     .then((data) => setAdmin(data.admin));
    // }, [user.email]);
  };
  return {
    admin,
    user,
    emailRegistration,
    logOut,
    signInUser,
    error,
    signInUsingGoogle,
  };
};

export default useFirebase;
