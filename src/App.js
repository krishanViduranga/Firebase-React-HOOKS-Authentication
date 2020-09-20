/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import Firebase from "./config/firebase";
import Login from "./Login";
import Home from "./Home";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  //arrow function for login
  const handleLogin = () => {
    clearErrors();
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        

      )
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/invalid-email-verified":
            setEmailError(err.message);
            break;
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            setEmailError(err.message);
            break;
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    Firebase.auth().signOut();
  };

  const authListener = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  // function (firebaseUser) {
  //   //console.log("SUCCESS");
  //   var user = Firebase.auth().currentUser;
  //   var ref = Firebase.database().ref("Users").child(user.uid);
  //   ref.once("value", function (snapshot) {
  //     let type = snapshot.val().type;
  //     if (type === "admin") {
  //       //console.log("hERER");
  //       window.location.replace("/manager/DailySummary");
  //     } else {
  //       alert("Invalid Login");
  //     }
  //   });
  // }

  return (
    <div className="App">
      {user ? (
        <Home handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};

export default App;
