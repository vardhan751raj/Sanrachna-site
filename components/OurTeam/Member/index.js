import React from 'react'
import style from './index.module.scss'
const src = 'https://www.omaxe.com/testimonial/testimonial_755.jpg'

const index = () => {
  return (
    <div className={style.card}>
      <figure className={style.figure}>
        <img src={src} className={style.img} />
      </figure>

      <div className={style.person}>
        <h2 className={style.name}>MR. JATIN GOEL</h2>
        <p className={style.position}>Group Director</p>
      </div>

      <p className={style.description}>
        Jatin Goel is part of Omaxe steering team as group director of the
        company and is responsible for enhancing business....
      </p>
    </div>
  )
}

export default index
