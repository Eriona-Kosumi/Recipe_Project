import { useEffect, useState } from "react";
import { movies } from "../../../components/Films/data/movies";
import { FilmsContext } from "./FilmsContext";
import _orderBy from "lodash/orderBy"
import { FormDataType } from "../../../components/FilmForm/FilmForm";
import { randomId } from "../../helpers/randomId";
import { FilmInterface } from "../../../components/Films/FilmCard";
import { allFilms } from "../../../api/Films/films.client";
import { FilmRespnseType } from "../../../api/Films/films.types";

interface Props {
    children: React.ReactNode;
}

const sortFilms = (films: any) => _orderBy(films, ['featured', 'title'], ['desc', 'asc'])

const FilmsContextProvider = ({children}: Props) => {
    const [films, setFilms] = useState<FilmRespnseType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const [selectedFilm, setSelectedFilm] = useState<FilmRespnseType | undefined>();

    useEffect(() => {
      setLoading(true);
      allFilms().then(response => {
        setFilms(response.data.films)
      }).catch(err => {
        console.log(err)
        setError(err?.message ?? 'Something went wrong')
      }).finally(() => {
        setLoading(false)
      });
    }, [])

    const selectFilm = (id: string) => {
        setSelectedFilm(films.find(film => film._id === id))
    }

    const addNewFilm = (form: FormDataType) => {
        setFilms(sortFilms([...films, {...form, _id: randomId(), im: 'https://placehold.co/600x400/EEE/31343C'}]))
    }

  const handleClick = (id: string) => {
    setFilms(sortFilms(films.map(film => film._id === id ? {...film, featured: !film.featured} : film)))
  }

  const updateFilm = (id: string, form: FormDataType) => {
    setFilms(sortFilms(films.map(film => film._id === id ? {...film, ...form} : film)))
    setSelectedFilm(undefined)
  }

  const deleteFilm = (id: string) => {
    setFilms(films.filter(film => film._id !== id))
  }

    return (
        <FilmsContext.Provider value={{
            films,
            addNewFilm,
            updateFilm,
            deleteFilm,
            selectedFilm,
            selectFilm,
            toggleFeatured: handleClick
        }}>
          {error ? error : loading ? <div>loading ...</div> : children}
        </FilmsContext.Provider>
    )
}

export default FilmsContextProvider;