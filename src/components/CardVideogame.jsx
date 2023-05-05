import React from "react";
import s from '../style/CardVideogame.module.css'
import { NavLink } from "react-router-dom";


const CardVideogame = ({ id, name, genres, rating, image }) => {

    return (
        <div className={s.card}>
            <img src={image} width="400px" height="250px" alt=""/>
                <div className={s.card__content}>
                <h3 className={s.nombre}>{name}</h3>
                <p className={s.genres}>{genres}</p>
                <p className={s.rating}>⭐ {rating}</p>
             <  NavLink to={`/detail/${id}`} className={s.navLink}><span className={s.leer_mas}>Read more</span></NavLink>
               </div>
        </div>
    )
}

export default CardVideogame;


//component class
/* class CardVideogame extends React.Component {

    render() {
        return (
            <div className={s.card}>
                <img src={this.props.image} width="400px" height="250px" alt=""/>
                <div className={s.card__content}>
                    <h3 className={s.nombre}>{this.props.name}</h3>
                    <p className={s.genres}>{this.props.genres}</p>
                    <p className={s.rating}>⭐ {this.props.rating}</p>
                 <  NavLink to={`/detail/${this.props.id}`} className={s.navLink}><span className={s.leer_mas}>Read more</span></NavLink>
             </div>
            </div>
        )
    }
};

export default CardVideogame; */