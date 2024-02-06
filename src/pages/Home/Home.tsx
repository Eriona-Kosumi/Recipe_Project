import _sortBy from "lodash/sortBy"
import _orderBy from "lodash/orderBy"

import FilmsList from "../../components/Films/FilmsList";
import FilmsContextProvider from "../../lib/context/FilmsContext/FilmsContextProvider";
import FilmForm from "../../components/FilmForm/FilmForm";
import { useEffect } from "react";
import { allFilms } from "../../api/Films/films.client";

export const Home = () => {

  return (
    <FilmsContextProvider>
      <div className="ui container mt-6">
        <FilmForm />
        <hr />
        <FilmsList />
      </div>
    </FilmsContextProvider>
  );
};
