import _sortBy from "lodash/sortBy"
import _orderBy from "lodash/orderBy"

import FilmsList from "../../components/Films/FilmsList";
import FilmsContextProvider from "../../lib/context/FilmsContext/FilmsContextProvider";
import FilmForm from "../../components/FilmForm/FilmForm";
import { useEffect } from "react";
import { allFilms } from "../../api/Films/films.client";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";

export const Home = () => {
  const {logout} = useAuthContext()
  return (
    <FilmsContextProvider>
      <div className="ui container mt-6">
        <Button>
          <Link to='add-film'>
            Add Film
          </Link>
        </Button>
        <Button onClick={logout}>
          Logout
        </Button>
        <FilmsList />
      </div>
    </FilmsContextProvider>
  );
};
