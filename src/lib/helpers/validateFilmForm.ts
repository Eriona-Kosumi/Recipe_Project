import { AddFilmRequest } from "../../api/Films/films.types";
import { ErrorFormDataType } from "../../components/FilmForm/FilmForm";

export const validate = (obj: AddFilmRequest): ErrorFormDataType => {
  const errors: ErrorFormDataType = {};
  if (!obj.title) errors.title = "This field is required";
  if (!obj.director) errors.director = "This field is required";
  if (!obj.description) errors.description = "This field is required";
  if (!obj.img) errors.img = "This field is required";
  if (!obj.duration) errors.duration = "This field is required";
  if (!obj.price) errors.price = "This field is required";

  if (obj.price < 0) errors.price = "Price error: should be positive number";
  if (obj.duration < 0) errors.duration = "Duration error: should be positive number";
  return errors;
};
