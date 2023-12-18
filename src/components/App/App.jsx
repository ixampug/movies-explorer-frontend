import React, { useState, useEffect } from "react";
import { Route, Switch, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import api from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute";
import EditAvatarPopup from "../EditAvatarPopup";
import EditProfilePopup from "../EditProfilePopup";
import InfoTooltip from "../InfoTooltip";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import HeaderLoggedIn from "../HeaderLoggedIn/HeaderLoggedIn";

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
            <Header />
            <SavedMovies />
            <Footer />
          </div>
        }
      />
      <Route
        path="/profile"
        element={
          <div className="page">
            <Header />
            <Profile />
          </div>
        }
      />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
    </Routes>
  );
}
