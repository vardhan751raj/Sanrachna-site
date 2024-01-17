import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Member from './Member'
import Slider from '../../uitl-component/Slider'
import TestimonialCard from '../Testimonial/TestimonialCard'

const src = 'https://www.omaxe.com/testimonial/testimonial_755.jpg'

const member1 = {
  photo: '/images/R.B.Singh.png',
  name: 'R.B. Singh',
  position: 'Engineer & Builder'
  // photo: "https://www.omaxe.com/managementspeakhome/managementspeak_433.webp",
  // name: "RajVardhan",
  // position: "Team Lead",
  // description: "He is professional and googf looking",
}

const member2 = {
  photo: '/images/Ramswarup.png',
  name: 'Mr. Ramswarup Sharma',
  position: 'Builder'

  // photo: 'https://www.omaxe.com/managementspeakhome/managementspeak_433.webp',
  // name: 'RajVardhan',
  // position: 'Team Lead',
  // description: 'He is professional and googf looking'
}

const index = () => {
  return (
    <section className={styles.member} id='team'>
      <div className={styles.div}>
        <header className={styles.header}>
          <h1 className={styles.h1}>MEET OUR TEAM</h1>
          <h3 className={styles.h3}>
            Without a capable captain at the helm, the ship falters. We are
            proud to have such able leadership guiding us with their vision.
          </h3>
        </header>

        <div className={styles['team-member-card']}>
          <div className={styles['team-member']}>
            <img
              src={member1.photo}
              alt={`${member1.name} Photo`}
              className={styles['member-photo']}
            />
            <div className={styles['member-details']}>
              <h3>{member1.name}</h3>
              <p className={styles['position']}>{member1.position}</p>
              <p className={styles['description']}>{member1.description}</p>
            </div>
          </div>

          <div className={styles['team-member']}>
            <img
              src={member2.photo}
              alt={`${member2.name} Photo`}
              className={styles['member-photo']}
            />
            <div className={styles['member-details']}>
              <h3>{member2.name}</h3>
              <p className={styles['position']}>{member2.position}</p>
              <p className={styles['description']}>{member2.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
