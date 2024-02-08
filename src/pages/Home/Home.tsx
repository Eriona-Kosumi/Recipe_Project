import _sortBy from "lodash/sortBy"
import _orderBy from "lodash/orderBy"

import FilmsList from "../../components/Films/FilmsList";
import FilmsContextProvider from "../../lib/context/FilmsContext/FilmsContextProvider";
import FilmForm from "../../components/FilmForm/FilmForm";
import { useEffect } from "react";
import { allFilms } from "../../api/Films/films.client";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";

export const Home = () => {

  return (
    <FilmsContextProvider>
      <div className="ui container mt-6">
        <Button>
          <Link to='add-film'>
            Add Film
          </Link>
        </Button>
        <FilmsList />
      </div>
    </FilmsContextProvider>
  );
};
