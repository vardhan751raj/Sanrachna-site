import React, { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import TestimonialCard from './TestimonialCard'
import style from './index.module.scss'

// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   draggable: true,
//   mobileFirst: true,
//   centerMode: true,
//   centerPadding: '5%',
//   slidesToScroll: 1,
//   arrows: false,
//   dotsClass: style.button__bar
// }

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

const MobileView = () => {
  const [settings, setSettings] = useState(
    {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      draggable: true,
      mobileFirst: true,
      centerMode: true,
      // centerPadding: '10%',
      centerPadding:
        typeof window !== 'undefined' &&
        window.outerWidth < 640 &&
        window.outerWidth > 540
          ? '15%'
          : '10%',
      slidesToScroll: 1,
      arrows: false,
      dotsClass: style.button__bar
    }
    // typeof window !== 'undefined' && window.outerWidth < 900 ? 2 : 3
  )

  return (
    <section className={style.section__mobile}>
      <header className={style.header__mobile}>Customer Experiences</header>
      <Slider {...settings} className={style.slider__slide}>
        {customerReviews &&
          customerReviews.map(review => {
            return <TestimonialCard review={review} />
          })}
      </Slider>
    </section>
  )
}

export default MobileView
