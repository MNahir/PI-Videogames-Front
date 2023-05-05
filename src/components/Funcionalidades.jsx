import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByGenres} from "../redux/actions";
import s from '../style/Funcionalidades.module.css';


const Funcionalidades = ({handleFilter, handleSort, handleSource}) => {

    const dispatch = useDispatch() //el useDispatch devuelve el metodo dispatch que permite dispatchar acciones
    const generos = useSelector(state => state.genres)// el useSelector lee un valor del estado del store(reducer) y se suscribe a las actualizaciones del mismo.
    

    useEffect(() => { //
        dispatch(getByGenres())
    }, [dispatch])


    return (
            <div className={s.box}>
                    <select onChange={e => handleSort(e)}>
                        <option value="" >Order by...</option>
                        <option value="A-Z" >A-Z</option>
                        <option value="Z-A" >Z-A</option>
                        <option value="RatingAsc">Rating ↑ </option>
                        <option value="RatingDesc">Rating ↓ </option>
                    </select>

                    <select id="genre" onChange={e => handleFilter(e)}>
                        <option value=''>Filter by genres</option>
                        {generos && generos.map(g => {
                            return (
                                <option key={g.id} value={g.name}>{g.name}</option>
                            )
                        })}
                    </select>

                    <select onChange={e => handleSource(e)}>
                        <option value=''>Filter by origin</option>
                        <option value="api">Api</option>
                        <option value="created">Created</option>
                    </select>
            </div>
    )
}

export default Funcionalidades;