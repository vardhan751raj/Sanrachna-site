// ProjectList.js

import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard' // Assuming you have a ProjectCard component
import styles from './index.module.scss' // Import the module styles
import Slider from '../../uitl-component/Slider'

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

const ProjectList = () => {
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
    <section className={styles.project} id='project'>
      <div className={styles['project-list']}>
        <Slider
          sliderItem={projects}
          numberOfItemOnScreen={numberOfCardOnScreen}
          childrenProp={'project'}
          isHeader={true}
          topHeader='Project Highlights'
        >
          <ProjectCard />
        </Slider>
      </div>
    </section>
  )
}

export default ProjectList
