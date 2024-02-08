import { apiRequest } from "../Api";
import { AddFilmRequest, FilmRespnseType, FilmsRespnseType } from "./films.types";

//funksionet me endpointa edhe metoda
export const allFilms = async () =>
  await apiRequest<{}, FilmsRespnseType>({
    url: "api/films",
  });

export const getFilmById = async (filmId: string) =>
  await apiRequest<{}, { film: FilmRespnseType }>({
    url: `api/films/${filmId}`,
  });

export const createFilm = async (film: AddFilmRequest) =>
  await apiRequest<{ film: AddFilmRequest }, { film: AddFilmRequest }>({
    url: "api/films",
    method: "POST",
    data: { film },
  });

export const editFilm = async (id: string, film: AddFilmRequest) =>
  await apiRequest<{ film: AddFilmRequest }, { film: AddFilmRequest }>({
    url: `api/films/${id}`,
    method: "PUT",
    data: { film },
  });

export const deleteFilmApi = async (id: string) =>
  await apiRequest<{}, FilmsRespnseType>({
    url: `api/films/${id}`,
    method: "DELETE",
  });
