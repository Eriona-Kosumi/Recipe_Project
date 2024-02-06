import { apiRequest } from "../Api";
import { AddFilmRequest, FilmsRespnseType } from "./films.types";

//funksionet me endpointa edhe metoda
export const allFilms = async () =>
  await apiRequest<{}, FilmsRespnseType>({
    url: "api/films",
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
