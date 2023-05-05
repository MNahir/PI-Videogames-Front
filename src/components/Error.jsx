import React from 'react'
import i from '../imagenes/kirby.jpg'
import s from '../style/Error.module.css'

export default function Error () {

    return (
        <div className={s.kirby}>
            <h1>Not videogames found</h1>
            <img src={i} alt='kirby' />
        </div>
    )
}