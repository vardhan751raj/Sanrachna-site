import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import Slider from '../../uitl-component/Slider'
import TestimonialCard from './TestimonialCard'

// const customerReviews = [
//   {
//     id: 1,
//     photo: './images/last.jpg',
//     profession: 'Architect',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//   },
//   {
//     id: 2,
//     photo: 'url_to_customer2_photo.jpg',
//     profession: 'Interior Designer',
//     text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//   },
//   {
//     id: 3,
//     photo: 'url_to_customer2_photo.jpg',
//     profession: 'Interior Designer',
//     text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//   },
//   {
//     id: 4,
//     photo: 'url_to_customer2_photo.jpg',
//     profession: 'Interior Designer',
//     text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//   },
//   {
//     id: 5,
//     photo: 'url_to_customer2_photo.jpg',
//     profession: 'Interior Designer',
//     text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//   }

//   // Add more reviews as needed
// ]

const customerReviews = [
  {
    id: 1,
    // photo: "url_to_customer1_photo.jpg",
    photo: './images/last.jpg',
    profession: 'Architect',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    // photo: 'url_to_customer2_photo.jpg',
    photo: './images/last.jpg',
    profession: 'Interior Designer',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    // photo: 'url_to_customer2_photo.jpg',
    photo: './images/last.jpg',
    profession: 'Interior Designer',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 4,
    // photo: 'url_to_customer2_photo.jpg',
    photo: './images/last.jpg',
    profession: 'Interior Designer',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 5,
    // photo: 'url_to_customer2_photo.jpg',
    photo: './images/last.jpg',
    profession: 'Interior Designer',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }

  // Add more reviews as needed
]

const index = () => {
  const [numberOfCardOnScreen, setNumberOfCardOnScreen] = useState(
    typeof window !== 'undefined' && window.outerWidth < 900 ? 2 : 3
  )
  useEffect(() => {
    function handleResize () {
      // setWidth(window.innerWidth)
      // setHeight(window.innerHeight)

      if (window.outerWidth < 900 && numberOfCardOnScreen == 3) {
        setNumberOfCardOnScreen(2)
      } else if (window.outerWidth > 900 && numberOfCardOnScreen == 2) {
        setNumberOfCardOnScreen(3)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [numberOfCardOnScreen])

  return (
    <section className={style.section} id='testimonial'>
      <div className={style.div}>
        <Slider
          sliderItem={customerReviews}
          numberOfItemOnScreen={numberOfCardOnScreen}
          childrenProp={'review'}
          isHeader={true}
          topHeader='Customer Experiences'
        >
          <TestimonialCard />
        </Slider>
      </div>
    </section>
  )
}

export default index
