import React from 'react'
import loading from '../imagenes/loading-25.gif.webp'
import s from '../style/Loading.module.css'

export default function PaginaDeCarga() {
    return (
          <div className={s.box_loading}>
            <img src={loading} alt="" />
          </div>
    )}
