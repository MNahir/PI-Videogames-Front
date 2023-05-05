import axios from "axios";
import { 
GET_ALL_VIDEOGAMES,
GET_NAMES,
GET_VIDEOGAME,
GET_BY_GENRES,
CREATE_VIDEOGAME,
ORDER_BY,
FILTER_BY_SOURCE,
FILTER_BY_GENRES,
 GET_PLATFORMS
} from "./actions-Type";



/* export const getAllVideogames = () => {
  return function(dispatch){
    axios("")
    .then(response => response.data)
    .then(data => dispatch({ type: GET_ALL_VIDEOGAMES, payload: data}))
  };
}; */

/* export const getAllVideogames = () => {
  return function(dispatch){
    fetch("URL")
    .then(response => response.json())
    .then(data => dispatch({ type: GET_ALL_VIDEOGAMES, payload: data}))
  };
}; */


export const getAllVideogames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/videogames');
      return dispatch({
        type: GET_ALL_VIDEOGAMES,
        payload: data,
      });
    } catch (err) {
    }
  };
};



export const getNames = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/videogames?name=${name}`
      );
      return dispatch({
        type: GET_NAMES,
        payload: data,
      });
    } catch (err) {
    
      return dispatch({
        type: GET_NAMES,
        payload: []
      })
    }
  };
};

export const getVideogame = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/videogame/${id}`);
      return dispatch({
        type: GET_VIDEOGAME,
        payload: data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getByGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/genres');
      return dispatch({
        type: GET_BY_GENRES,
        payload: data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const createVideogame = (videogame) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/videogame`,
        videogame
      );
      alert("Felicidades, el juego fue creado exitosamente.");
      return dispatch({
        type: CREATE_VIDEOGAME,
        payload: data,
      });

    } catch (err) {
      alert("Disculpe, el videojuego no pudo ser creado.");
    }
  };
};

export const orderBy = (payload) => {
  return {
    type: ORDER_BY,
    payload,
  };
};

export const filterBySource = (payload) => {
  return {
    type: FILTER_BY_SOURCE,
    payload,
  };
};

export const filterByGenres = (payload) => {
  return {
    type: FILTER_BY_GENRES,
    payload,
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
      const url = await axios.get('/videogames')
      return dispatch({
          type: GET_PLATFORMS,
          payload: url.data,
      })
  }
};







