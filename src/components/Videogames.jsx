import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getAllVideogames } from "../redux/actions";
import img from '../imagenes/jocksting.jpg'
import CardVideogame from "./CardVideogame";
import s from '../style/Videogames.module.css'
import Loading from './Loading'
import Error from "./Error";

export const Videogames = ({currentGames}) => {
    const dispatch = useDispatch()
    const [carga, setCarga] = useState(true);

    React.useEffect(() => {
        dispatch(getAllVideogames()).then(() => setCarga(false)) //me traigo la action creators q me trae todos mis videojuegos de la API
    }, [dispatch])


    if (carga) {
        return <Loading />;
      }

    return (
        <div className={s.main}>
            {currentGames.length > 0 ?
            currentGames?.map(game => {
                return (<CardVideogame
                    key={game.id}
                    id={game.id}
                    image={game.image ? game.image : img}
                    name={game.name}
                    genres={game.genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}
                    platforms={game.platforms?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}
                    rating={game.rating}
                    />)}) : <Error /> }

        </div>
    )
}