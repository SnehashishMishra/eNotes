import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import ModalState from "./context/modal/ModalState";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const routes = createRoutesFromElements(
    <>
      {/* Landing Page at root */}
      <Route index element={<LandingPage />} />

      {/* All other pages use the Layout */}
      <Route
        path="/"
        element={<Layout alert={alert} />}
        errorElement={<ErrorPage />}
      >
        <Route path="home" element={<Home showAlert={showAlert} />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login showAlert={showAlert} />} />
        <Route path="signup" element={<Signup showAlert={showAlert} />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </>
  );

  const router = createBrowserRouter(routes);

  return (
    <NoteState>
      <ModalState>
        <RouterProvider router={router} />
      </ModalState>
    </NoteState>
  );
}

export default App;
