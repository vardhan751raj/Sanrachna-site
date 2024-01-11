import React from 'react'
import style from './index.module.scss'

const index = () => {
  return (
    <div className={style.responsive__bg} id='home'>
      {/* <img src='/images/3.jpg' /> */}
      <div className={style.box}>
        <h1>Welcome To Sanrachna</h1>
      </div>
      <p>
        “Brick by brick, stone by stone, every great thing was built by those
        who believed they could.""
      </p>
    </div>
  )
}

export default index
