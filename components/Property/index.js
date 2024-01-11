import React from 'react'
import style from "./index.module.scss"

const index = ({ typeOfProject }) => {
    return (
        <section className={style.section} id="project">

            <div className={style.div} >
                <h2 className={style.h2}>{`EXPLORE OUR ${typeOfProject} EXCLUSIVE RESIDENTIAL AND COMMERICAL PROJECTS`}</h2>
                <h3 className={style.h3}>Explore the range of our residental and commerical properties </h3>
                <div>

                </div>
            </div>

        </section>
    )
}

export default index