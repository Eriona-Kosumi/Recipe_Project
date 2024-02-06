import React, { useEffect, useState } from 'react'
import { createFilm, editFilm } from '../../api/Films/films.client';
import { AddFilmRequest, FilmRespnseType } from '../../api/Films/films.types';
import { useFilmsContext } from '../../lib/context/FilmsContext/FilmsContext';
import { validate } from '../../lib/helpers/validateFilmForm';
import FormMessage from './FormMessage';

export interface FormDataType{
  title: string;
  description: string;
  director: string;
  duration: number;
  price: number;
  featured: boolean
}

export interface ErrorFormDataType{
  title?: string;
  description?: string;
  director?: string;
  duration?: string;
  price?: string;
  img?: string;
}

const FilmForm = () => {
  const {selectedFilm} = useFilmsContext()
  const [formData, setFormData] = useState<AddFilmRequest>({
    title: "",
    description: "",
    director: "",
    img: "",
    duration: 0,
    price: 0,
    featured: false,
  })

  const [errors, setErrors] = useState<{[key:string]: string}>();

  useEffect(() => {
    setFormData({
      title: selectedFilm?.title ?? '',
      description: selectedFilm?.description ?? '',
      director: selectedFilm?.director ?? '',
      img: selectedFilm?.img ?? '',
      duration: selectedFilm?.duration ?? 0,
      price: selectedFilm?.price ?? 0,
      featured: selectedFilm?.featured ?? false,
    })
  }, [selectedFilm])

  const {addNewFilm, updateFilm} = useFilmsContext()

  const handleStringInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setFormData((previousState: AddFilmRequest) => ({
      ...previousState,
      [name]: value
    }))
  }

  const handleNumberInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setFormData((previousState: AddFilmRequest) => ({
      ...previousState,
      [name]: Number(value)
    }))
  }

  const handleBooleanInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, checked} = event.currentTarget;
    setFormData((previousState: AddFilmRequest) => ({
      ...previousState,
      [name]: checked
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      if(selectedFilm){
        editFilm(selectedFilm?._id, formData).then(
          res => {
            setErrors({})
            setFormData({
              title: "",
              description: "",
              director: "",
              img: "",
              duration: 0,
              price: 0,
              featured: false
            })
            updateFilm(selectedFilm?._id, res.data.film)
          }
        ).catch(err => setErrors(err?.response.data.errors))
      }else{
        createFilm(formData).then((response) =>{
          setErrors({})
          setFormData({
            title: "",
            description: "",
            director: "",
            img: "",
            duration: 0,
            price: 0,
            featured: false
          })
          addNewFilm(response?.data?.film)
        }).catch(err => {
          console.log({err})
          setErrors(err?.response.data.errors)
        })
      }
  }

  return (
    <form onSubmit={handleSubmit} className='ui form mb-6'>
        <div className='field'>
          <label>Film Title</label>
          <input onChange={handleStringInput} value={formData.title} type='text' name="title" id="title" placeholder='film title' />
          <FormMessage error={errors?.title} />
        </div>
        <div className='field'>
          <label>Film Description</label>
          <input onChange={handleStringInput} value={formData.description} type='text' name="description" id="description" placeholder='film description' />
          <FormMessage error={errors?.description} />
        </div>
        <div className='field'>
          <label>Film Director</label>
          <input onChange={handleStringInput} value={formData.director} type='text' name="director" id="director" placeholder='film description' />
          <FormMessage error={errors?.director} />
        </div>
        <div className='field'>
          <label>Film Duration</label>
          <input onChange={handleNumberInput} value={formData.duration} type='number' name="duration" id="duration" placeholder='film description' />
          <FormMessage  error={errors?.duration} />
        </div>
        <div className='field'>
          <label>Film Image</label>
          <input onChange={handleStringInput} value={formData.img} type='text' name="img" id="img" placeholder='film image url' />
          <FormMessage  error={errors?.img} />
        </div>
        <div className='field'>
          <label>Film Price</label>
          <input onChange={handleNumberInput} value={formData.price} type='number' name="price" id="price" placeholder='film price' />
          <FormMessage error={errors?.price} />
        </div>
        <div className='field'>
          <label>Film Featured</label>
          <input onChange={handleBooleanInput} type='checkbox' checked={formData.featured} name="featured" id="featured" placeholder='film price' />
        </div>

        <button className='ui button' type='submit'>
          {selectedFilm ? 'Update' : 'Save'}
        </button>
    </form>
  )
}

export default FilmForm