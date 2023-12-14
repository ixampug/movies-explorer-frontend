import React, { useState, useEffect } from "react";
import { Route, Switch, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm";
import api from "../../utils/api";
import ImagePopup from "../ImagePopup";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import AddPlacePopup from "../AddPlacePopup";

import ProtectedRoute from "../ProtectedRoute";
import EditAvatarPopup from "../EditAvatarPopup";
import EditProfilePopup from "../EditProfilePopup";
import InfoTooltip from "../InfoTooltip";
import Register from "../Register";
import Login from "../Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

export default function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  );
}
