import React from 'react'
import { useParams } from 'react-router-dom'
import FilmForm from '../../components/FilmForm/FilmForm'

const AddFilm = () => {
  return (
    <div className="ui container mt-6">
        <FilmForm />
    </div>
  )
}

export default AddFilm