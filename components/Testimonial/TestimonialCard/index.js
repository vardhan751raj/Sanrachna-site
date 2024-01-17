// import React from 'react'
// import style from './index.module.scss'

// const src = 'https://www.omaxe.com/testimonial/testimonial_755.jpg'

// const index = () => {
//   return (
//     <div className={style.card}>
//       <figure className={style.figure}>
//         <img src={src} className={style.img} />
//       </figure>
//       <div className={style.customer}>
//         <h2 className={style.name}>Mr. Kuljit Singh</h2>
//         <h4 className={style.position}>Tetd. From Xeon</h4>

//         <p
//           className={style.testimonial}
//         >{`"Its very safe around here, our kids can play late at night"`}</p>
//       </div>
//     </div>
//   )
// }

// export default index

import React from 'react'
import styles from './index.module.scss'
const src = 'https://www.omaxe.com/testimonial/testimonial_755.jpg'

const CustomerReviewCard = ({ review }) => {
  const { photo, profession, text, name } = review

  return (
    <div className={styles['review-card']}>
      <img
        src={review?.photo}
        alt={`Customer Photo`}
        className={styles['customer-photo']}
      />
      <div className={styles['review-details']}>
        
        <p className={styles['profession']}>{name}</p>
        <p className={styles['profession']}>{profession}</p>
        <p className={styles['review-text']}>{text}</p>
      </div>
    </div>
  )
}

export default CustomerReviewCard
