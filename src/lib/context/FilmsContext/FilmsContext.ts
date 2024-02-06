import React, { useContext } from "react";
import { AddFilmRequest, FilmRespnseType, FilmsRespnseType } from "../../../api/Films/films.types";
import { FormDataType } from "../../../components/FilmForm/FilmForm";
import { FilmInterface } from "../../../components/Films/FilmCard";

interface FilmContextType {
  films: FilmRespnseType[];
  addNewFilm: (form: AddFilmRequest) => void;
  updateFilm: (id: string, form: FormDataType) => void;
  deleteFilm: (id: string) => void;
  selectedFilm?: FilmRespnseType;
  selectFilm: (id: string) => void;
  toggleFeatured: (id: string) => void;
}

const values: FilmContextType = {
  films: [],
  addNewFilm: () => {},
  updateFilm: () => {},
  selectedFilm: undefined,
  selectFilm: (id: string) => {},
  deleteFilm: (id: string) => {},
  toggleFeatured: (id: string) => {},
};

export const FilmsContext = React.createContext<FilmContextType>(values);

export const useFilmsContext = () => useContext(FilmsContext);
