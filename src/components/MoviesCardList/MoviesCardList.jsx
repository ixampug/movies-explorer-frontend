import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
    <section className="movies-list">
      <div className="cards">
        <MoviesCard />
      </div>
    </section>
  );
}
