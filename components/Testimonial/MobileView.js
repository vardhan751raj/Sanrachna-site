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
    profession: 'Army Officer',
    name: 'Mr. Abhishek Kumar',
    text: 'Sanrachna Co. did a top notch renovation and new construction on our home. We love it and are very pleased with the results.'
  },
  {
    id: 2,
    // photo: 'url_to_customer2_photo.jpg',
    photo: './images/last.jpg',
    profession: 'Businessman',
    name: 'Mr. Ajeet Pandey',
    text: 'They made what could’ve been quite disruptive a very smooth experience, and the final renovations look great. Thanks for the great design help and quality form the whole team.'
  },
  {
    id: 3,
    // photo: 'url_to_customer2_photo.jpg',
    photo: './images/last.jpg',
    profession: 'Lawyer' ,
    name: 'Mr. Virendra Choudhary',
    text: 'We strongly felt that we should go to Sanrachna Construction rather than any other contractor, and I would highly recommend Sanrachna Co. to my own family and friends.'
  },
  {
    id: 4,
    // photo: 'url_to_customer2_photo.jpg',
    photo: './images/last.jpg',
    profession: 'Doctor',
    name: 'Dr. Vikas Patel',
    text: "Sanrachna Co. made no false promises and we were actually happy to have found Sanrachna Co. It was an online search however, Sanrachna Co. was very transparent and that's what we liked the most and now we are happy homeowners. Thank you Sanrachna Co."
  },
  {
    id: 5,
    // photo: 'url_to_customer2_photo.jpg',
    photo: './images/last.jpg',
    profession:'Doctor', 
    name : 'Dr. Sudhir Nagar',
    text: 'The experience was great, and I am happy and satisfied. Sanrachna did a fantastic job, they were quick, efficient, and very professional'
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
