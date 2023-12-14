// import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
export default function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
    </>
  );
}
