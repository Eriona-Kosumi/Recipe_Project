import { useFilmsContext } from "../../lib/context/FilmsContext/FilmsContext";
import Featured from "./Featured";
import ReactImageFallback from "react-image-fallback";
import { AddFilmRequest, FilmRespnseType } from "../../api/Films/films.types";
import { deleteFilmApi } from "../../api/Films/films.client";
import { useNavigate } from "react-router-dom";

interface Props{
    film: FilmRespnseType,
}

export interface FilmInterface{
  _id: string;
  title: string;
  director: string;
  description: string;
  duration: number;
  price: number;
  im: string;
  featured: boolean;
}

const FilmCard = ({film}: Props) => {
    const {selectFilm, deleteFilm} = useFilmsContext()
    const navigate = useNavigate();

    const deleteFilmHandler = () => {
      deleteFilmApi(film._id).then(() => {
        deleteFilm(film._id)
      }).catch(err => {console.log(err)})
    }

    return <div className="ui card">
    <Featured id={film._id} featured={film.featured}/>
    <div className="image">
      <span className="ui green label ribbon">{film.price}</span>
      <ReactImageFallback
        src={film.img}
        fallbackImage={'https://placehold.co/400'}
        initialImage="loader.gif"
        alt="cool image should be here"
        className="my-image" />
    </div>

    <div className="content">
      <span className="header">
        {film.title}
      </span>
      <div className="meta">
        <i className="icon users" /> {film.director}
        <span className="right floated">
          <i className="icon wait right" /> {film.duration} min
        </span>
      </div>
      <button onClick={() => {navigate(`update-film/${film._id}`)}} className='ui button' type="button">Edit</button>
      <button onClick={deleteFilmHandler} className='ui button' type="button">Delete</button>
    </div>
  </div>
}

// .propTypes

// defaultProps

export default FilmCard