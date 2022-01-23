import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";

import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import { login } from "../actions/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      // Obtener usuario si tenemos en el firebase
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Please wait...</h1>;
  }

  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <PublicRoute isAuth={isLoggedIn}>
            <AuthRouter />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute isAuth={isLoggedIn}>
            <JournalScreen />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<AuthRouter />} />
    </Routes>
  );
};

export default AppRouter;
