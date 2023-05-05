import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVideogame, getByGenres, getPlatforms } from "../../redux/actions";
import s from '../../style/Form.module.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { validate } from './formValidate';


export default function Form() {
  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    released: "",
    rating: "",
    genres: [],
    platforms: []
  });

  const [errors, setErrors] = useState({}); //me creo un estado local, en donde errors = {}
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const generos = useSelector((state) => state.genres);
  const plataformas = useSelector(state => state.platforms);
  const allNames = useSelector(state => state.allVideogames);

  
  useEffect(() => {
    dispatch(getByGenres());
    dispatch(getPlatforms());
  }, [dispatch])
  
  function handleSubmit(e) {
    e.preventDefault();

    let noRepeat = allNames.filter(n => n.name === input.name)
    if(noRepeat.length !== 0) {
      alert('Ya existe un juego con ese nombre, por favor elija otro')
    } else {
        let error = Object.keys(validate(input)) // Object.keys(errors) --> errors = {} => devuelve un array de strings q representa todas las propiedades del objeto
        //solo habra propiedades si es que HAY ALGUN ERROR
        if(error.length !== 0 || !input.genres.length || !input.platforms.length ) { //Entonces si hay algun error, error va a ser un array con la propiedad en donde haya un error, osea que su length !== 0
          alert('Complete los campos correctamente')
          return
        } else {
          dispatch(createVideogame(input));
          setInput({
            name: "",
            image: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: [],
          });
          
        }
        navigate('/home')

    }
  }

  function handleChange(e) {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(validate({
      ...input,
      [e.target.name]: [e.target.value]
    })
    )
  }

  function handleGenres(e) {
    if(!input.genres.includes(e.target.value)) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      })
    }
  }

  function handlePlatforms(e) {
    if(!input.platforms.includes(e.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value]
      })
    }
  }

 

  function handleDeleteG(e) {
    setInput({
      ...input,
      genres: input.genres.filter((gen) => gen !== e)
    });
  }

  function handleDeleteP(e) {
    setInput({
      ...input,
      platforms: input.platforms.filter((plat) => plat !== e)
    });
  }


  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className={s.box_form}>
        <div className={s.form}>
          <h2 className={s.titulo}>¡Create your own videogame!</h2>

          <div className={s.grupo}>
            <input
              className={s.create_input}
              type="text"
              required
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              /> <span className={s.barra}></span>
            <label className={s.label}>Name: </label>
            {errors.name && (
              <p className={s.danger}>{errors.name}</p>
            )}
          </div>


          <div className={s.grupo}>
            <input
            className={s.create_input}
              type="text"
              name="image"
              value={input.image}
              onChange={(e) => handleChange(e)}
              /> <span className={s.barra}></span>
            <label className={s.label}>Image URL: </label>
            {errors.image && (
              <p className={s.danger}>{errors.image}</p>
            )}
          </div>


          <div className={s.grupo}>
            <input
            className={s.create_input}
              required
              type='date'
              name="released"
              value={input.released}
              placeholder='yyyy-mm-dd'
              onChange={(e) => handleChange(e)}
              /> <span className={s.barra}></span>
            <label className={s.label}>Release date: </label>
            {errors.released && (
              <p className={s.danger}>{errors.released}</p>
            )}

          </div>

          <div className={s.grupo}>
            <input
            className={s.create_input}
              required
              type="number"
              name="rating"
              value={input.rating}
              onChange={(e) => handleChange(e)}
              /> <span className={s.barra}></span>
            <label className={s.label}>Rating: </label>
            {errors.rating && (
              <p className={s.danger}>{errors.rating}</p>
            )}
          </div>


          <div className={s.grupo}>
            <select className={s.select_create} id="genres" defaultValue="" onChange={(e) => handleGenres(e)}>
              <option className={s.option_create} value='' disabled hidden>Select the genre...</option>
              {generos.map((g) => {
                return (
                  <option className={s.option_create} key={g.id} value={g.name}>{g.name}</option>
                  );
                })}
            </select> <span className={s.barra}></span>
            <label className={s.label}>Genres: </label>
            {input.genres.map((g) => (
              <div className={s.box_opcion}>
                <div className={s.opcion_title}>{g}</div>
                <button className={s.btn_remove} onClick={() => handleDeleteG(g)} key={g} value={g}><span className={s.x}>X</span></button>
              </div>
        ))}
          </div>


          <div className={s.grupo}>
              <select className={s.select_create} id="platforms" defaultValue="" onChange={(e) => handlePlatforms(e)}>
                  <option className={s.option_create} value="" disabled hidden>Select the platform...</option>
                  {plataformas?.map(p => {
                    return (
                      <option className={s.option_create} value={p.platforms} key={p.id}>{p.platforms}</option>
                      );
                    })}
              </select> <span className={s.barra}></span>
              <label className={s.label}>Platforms:  </label>
              {input.platforms.map((p) => (
                <div className={s.box_opcion}>
                  <div className={s.opcion_title}>{p}</div>
                  <button className={s.btn_remove} onClick={() => handleDeleteP(p)} key={p} value={p}><span className={s.x}>X</span></button>
                </div>
              ))}
          </div>

          <div className={s.grupo}>
            <textarea
              required
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handleChange(e)}
              > </textarea>
            <label className={s.description}>Description: </label>
            {errors.description && (
              <p className={s.danger}>{errors.description}</p>
            )}
          </div>
      </div>
      <div>
          <button type="submit" className={s.btn_submit}>CREATE VIDEOGAME</button>
      </div>
      <div className={s.box_home}>
          <NavLink to={'/home'} className={s.back_home}>Cancel</NavLink>
      </div>
      </form>

    </div>
  );
};