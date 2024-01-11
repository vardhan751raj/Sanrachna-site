import React, { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ProjectCard from './ProjectCard'
import style from './index.module.scss'

// const projects = [
//   {
//     id: 1,
//     photo: "https://www.omaxe.com/projects/homepage_1666263003396.jpg",
//     name: "Commercial Project A",
//     location: "City X",
//     projectType: "Commercial",
//   },
//   {
//     id: 2,
//     photo: "https://www.omaxe.com/projects/homepage_1666263003396.jpg",
//     name: "Residential Project B",
//     location: "City Y",
//     projectType: "Residential",
//   },
//   {
//     id: 3,
//     photo: "https://www.omaxe.com/projects/homepage_1666263003396.jpg",
//     name: "Residential Project B",
//     location: "City Y",
//     projectType: "Residential",
//   },
//   {
//     id: 4,
//     photo: "https://www.omaxe.com/projects/homepage_1666263003396.jpg",
//     name: "Residential Project B",
//     location: "City Y",
//     projectType: "Residential",
//   },
//   {
//     id: 5,
//     photo: "https://www.omaxe.com/projects/homepage_1666263003396.jpg",
//     name: "Residential Project B",
//     location: "City Y",
//     projectType: "Residential",
//   },
//   // Add more projects as needed
// ];

const projects = [
  {
    id: 1,
    photo: '/images/Gaziabad.jpeg',
    // photo: "https://www.omaxe.com/projects/homepage_1666263003396.jpg",
    // name: "Commercial Project A",
    location: 'Gaziabad',
    projectType: 'Commercial'
  },
  {
    id: 2,
    photo: '/images/Sector-10.jpeg',
    // photo: 'https://www.omaxe.com/projects/homepage_1666263003396.jpg',
    // name: 'Residential Project B',
    location: 'Sector-10, Noida',
    projectType: 'Residential'
  },
  {
    id: 3,
    photo: '/images/Sector-107.jpeg',
    // photo: 'https://www.omaxe.com/projects/homepage_1666263003396.jpg',
    // name: 'Residential Project B',
    location: 'Sector-107, Noida',
    projectType: 'Residential'
  },
  {
    id: 4,
    photo: '/images/Greater-Noida-West.jpeg',
    // photo: 'https://www.omaxe.com/projects/homepage_1666263003396.jpg',
    // name: 'Residential Project B',
    location: 'Greater Noida West',
    projectType: 'Residential'
  },
  {
    id: 5,
    photo: '/images/Noida Extesnion.jpeg',
    // photo: 'https://www.omaxe.com/projects/homepage_1666263003396.jpg',
    // name: 'Residential Project B',
    location: 'Noida Extension, Greater Noida',
    projectType: 'Residential'
  }
  // Add more projects as needed
]

// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   draggable: true,
//   mobileFirst: true,
//   centerMode: true,
//   centerPadding: '10%',
//   slidesToScroll: 1,
//   arrows: false,
//   dotsClass: style.button__bar
// }

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

  // useEffect(() => {
  //   function handleResize () {
  //     // setWidth(window.innerWidth)
  //     // setHeight(window.innerHeight)

  //     if (window.outerWidth < 900 && numberOfCardOnScreen == 3) {
  //       setNumberOfCardOnScreen(2)
  //     } else if (window.outerWidth > 900 && numberOfCardOnScreen == 2) {
  //       setNumberOfCardOnScreen(3)
  //     }
  //   }

  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [numberOfCardOnScreen])

  return (
    <section className={style.section__mobile}>
      <header className={style.header__mobile}>Project Highlights</header>
      <Slider {...settings} className={style.slider__slide}>
        {projects &&
          projects.map(project => {
            return <ProjectCard project={project} />
          })}
      </Slider>
    </section>
  )

  // return (
  //   <div className={style.project}>
  //     <header className={style.heading}>TestiMonial</header>

  //     {/* <div className={}> */}
  //     <Slider {...settings}>
  //       {projects &&
  //         projects.map(project => {
  //           return <ProjectCard project={project} />
  //         })}
  //     </Slider>
  //     {/* </div> */}
  //   </div>
  // )
}

export default MobileView
