import { useFilmsContext } from "../../lib/context/FilmsContext/FilmsContext"
import FilmCard from "./FilmCard"

const FilmsList = () => {
  const {films: movies} = useFilmsContext()
  
  return (
    <div className="!mt-2 grid grid-cols-4 gap-8">
        {
        movies.length !== 0 ? 
          movies.map(movie => <FilmCard film={movie} key={movie._id} />)
           : <div className="ui icon message">
            <i className="icon info" />
            <div className="content">
              <div className="header">No fims yet in our database</div>
            </div>
          </div>
        }
    </div>
  )
}

export default FilmsList