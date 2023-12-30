import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import HeaderLoggedIn from "../HeaderLoggedIn/HeaderLoggedIn";
import NotFound from "../NotFound/NotFound";
export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="page">
            <Header />
            <Main />
            <Footer />
          </div>
        }
      />
      <Route
        path="/movies"
        element={
          <div className="page">
            <HeaderLoggedIn />
            <Movies />
            <Footer />
          </div>
        }
      />
      <Route
        path="/saved-movies"
        element={
          <div className="page">
            <HeaderLoggedIn />
            <SavedMovies />
            <Footer />
          </div>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <HeaderLoggedIn />
            <Profile />
          </>
        }
      />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
