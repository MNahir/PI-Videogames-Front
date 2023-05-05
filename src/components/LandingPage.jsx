import React from "react";
import { Link } from 'react-router-dom'
import s from '../style/LandingPage.module.css'
import linkedin from '../imagenes/linkedin (1).png'
import github from '../imagenes/github (1).png'
import gmail from '../imagenes/gmail (1).png'

const LandingPage = () => {
    return (
        <div>
      

       <div className={s.full}>
            <p className={s.titulo}>VIDEOGAMES</p>
       <div className={s.full_inner}>
      </div>

        <section className={s.section}>
         <img src="https://i.pinimg.com/564x/1d/d2/98/1dd2986bf413ed25980d5d4d2b3236b7.jpg"></img>
         <img src="https://i.pinimg.com/564x/5c/f9/7b/5cf97b3f2c6f6373b7e9066a8b6c82f8.jpg"></img>
         <img src="https://i.pinimg.com/564x/cd/b5/cf/cdb5cf509e327d37c8e243e1e90e3629.jpg"></img>
         <img src="https://i.pinimg.com/564x/ce/9c/87/ce9c87b1b33a64f31a209eeaf048710f.jpg"></img>
         <img src="https://i.pinimg.com/564x/c4/f2/5f/c4f25f4d4b5947ce44373c40b5556056.jpg"></img>
         </section>

                <nav className={s.nav}>
                <div className={s.links}>
                    <div className={s.mini_box}>
                        <a href='https://www.linkedin.com/in/nahir-maresca-63b028251/' target="_blank" rel="noreferrer">
                            <img src={linkedin} alt='linkedin' />
                        </a>
                    </div>
                    <div className={s.mini_box}>
                        <a href='https://github.com/MNahir' target="_blank" rel="noreferrer">
                            <img src={github} alt='github' />
                        </a>
                    </div>
                    <div className={s.mini_box}>
                        <a href='mailto:marescanahir18@gmail.com' target="_blank" rel="noreferrer">
                            <img src={gmail} alt='gmail' />
                        </a>
                    </div>
                </div>
                <div className={s.content}>
                    <Link to='/home'>
                        <button className={s.btn}>
                            <span className={s.ingresar}>To play...</span>
                        </button>
                    </Link>
                </div>
                </nav>
            </div>
        </div> 
    )

}

export default LandingPage;