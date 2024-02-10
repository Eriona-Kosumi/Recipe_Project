import { useState } from "react";
import { editFilm } from "../../api/Films/films.client";
import { useFilmsContext } from "../../lib/context/FilmsContext/FilmsContext";

interface Props{
  featured: boolean;
  id: string;
}

const Featured = ({featured, id}: Props) => {
  const {films, toggleFeatured} = useFilmsContext()

  const handleFeatured = () => {
    const filmData = films.find(film => film._id === id);

    if(!filmData){
      throw Error('No film found')
    }
    
    editFilm(
      id,
      {
        ...filmData,
        featured: !featured
      }
    ).then(() => {
      toggleFeatured(id)
    }).catch(error => 
      console.log({error})
    )
  }

  return (
    <span onClick={handleFeatured} className="ui right corner label">
      <i className={`star icon ${featured ? 'yellow' : 'empty'}`} />
    </span>
  )
}

export default Featured