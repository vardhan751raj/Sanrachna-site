import React, { useState, useEffect, useRef } from 'react'
import style from './index.module.scss'

const Hamburger = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='52'
    height='24'
    viewBox='0 0 52 24'
  >
    <g id='Group_9' data-name='Group 9' transform='translate(-294 -47)'>
      <rect
        id='Rectangle_3'
        data-name='Rectangle 3'
        width='42'
        height='4'
        rx='2'
        transform='translate(304 47)'
        fill='#574c4c'
      />
      <rect
        id='Rectangle_5'
        data-name='Rectangle 5'
        width='42'
        height='4'
        rx='2'
        transform='translate(304 67)'
        fill='#574c4c'
      />
      <rect
        id='Rectangle_4'
        data-name='Rectangle 4'
        width='52'
        height='4'
        rx='2'
        transform='translate(294 57)'
        fill='#574c4c'
      />
    </g>
  </svg>
)

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [showFixedNavbar, setShowFixedNavbar] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const prevScrollPos = useRef(0)
  const navbarRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const componentRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      const isHamburgerClick =
        event.target.id === 'hamburger' ||
        (event.target.parentNode && event.target.parentNode.id === 'hamburger')

      if (!isHamburgerClick && showNavbar) {
        setShowNavbar(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showNavbar])

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     // Check if the click is outside the component
  //     if (
  //       componentRef.current &&
  //       !componentRef.current.contains(event.target)

  //       // showNavbar === true
  //     ) {
  //       // setIsOpen(false);
  //       // setShowNavbar(false);
  //       console.log("inside");
  //       console.log(event);

  //       if (
  //         (event.target.id === "hamburger" ||
  //           event.target?.parentNode?.id === "hamburger") &&
  //         showNavbar === false
  //       ) {
  //         setShowNavbar((prev) => {
  //           console.log("prev:..", prev);
  //           return !prev;
  //         });
  //         console.log("inside");
  //       } else {
  //         console.log("inside else");
  //         setShowNavbar(false);
  //       }
  //     }
  //   };
  //   // Add the event listener
  //   document.addEventListener("click", handleClickOutside);

  //   // Remove the event listener when the component is unmounted
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [showNavbar]); // Empty dependency array ensures that the effect runs once when the component mounts

  // const toggleOpen = () => {
  //   setIsOpen((prevOpen) => !prevOpen);
  // };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleItemClick = sectionId => {
    // Scroll to the corresponding section
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    // Intersection Observer to track active section
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // console.log('Entry:..', entry.target.id)
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    // Add observer to each section
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
    })

    // Cleanup the observer on component unmount
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Event listener to hide/show navbar on scroll

    if (typeof window !== 'undefined') {
      prevScrollPos.current = window.scrollY
    }

    const handleScroll = () => {
      const scrolled = window.scrollY
      const navbar = navbarRef.current

      // Check the scrolling direction
      const isScrollingDown = scrolled > prevScrollPos.current

      if (isScrollingDown) {
        // Scrolling down logic
        // navbar.classList.remove("fixed");
        setShowFixedNavbar(false)
      } else if (window.scrollY == 0) {
        if (navbar.classList.contains('Navigation_active__navbar__9oCA6')) {
          navbar.classList.remove('Navigation_active__navbar__9oCA6')
        }
        setActiveSection('home')
      } else {
        // Scrolling up logic
        // if (!navbar.classList.contains("fixed")) {
        //   navbar.classList.add("fixed");
        // }
        setShowFixedNavbar(true)
      }

      // Update the previous scroll position
      prevScrollPos.current = scrolled
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // useEffect(() => {
  //   if (activeSection === 'home') {
  //     const navbar = navbarRef.current
  //     if (navbar.classList.contains('active__navbar')) {
  //       navbar.classList.remove('active__navbar')
  //     }
  //   }
  // }, [activeSection])

  return (
    <nav
      className={`${style.navbar} ${showFixedNavbar && style.active__navbar}`}
      ref={navbarRef}
    >
      <div className={style.container}>
        <figure className={style.logo}>
          <img
            src='/images/logo.jpeg'
            placeholder='logo'
            className={style.img}
          />
        </figure>

        <div
          className={`${style.menu__icon} ${showNavbar && style.active}`}
          onClick={handleShowNavbar}
          id='hamburger'
        >
          <Hamburger />
        </div>

        <div
          className={`${style.nav__elements}  ${showNavbar && style.active}`}
          ref={componentRef}
        >
          <ul>
            <li
              onClick={() => handleItemClick('home')}
              className={activeSection === 'home' ? `${style.highlight}` : ''}
            >
              <p>Home</p>
            </li>

            <li
              onClick={() => handleItemClick('about')}
              className={activeSection === 'about' ? `${style.highlight}` : ''}
            >
              <p>About</p>
            </li>
            <li
              onClick={() => handleItemClick('project')}
              className={
                activeSection === 'project' ? `${style.highlight}` : ''
              }
            >
              <p>Project</p>
            </li>
            <li
              onClick={() => handleItemClick('team')}
              className={activeSection === 'team' ? `${style.highlight}` : ''}
            >
              <p>Team</p>
            </li>
            <li
              onClick={() => handleItemClick('testimonial')}
              className={
                activeSection === 'testimonial' ? `${style.highlight}` : ''
              }
            >
              <p>Testimonial</p>
            </li>

            <li
              onClick={() => handleItemClick('mail')}
              className={activeSection === 'mail' ? `${style.highlight}` : ''}
            >
              <p className={activeSection === 'mail' ? 'active' : ''}>
                Contact
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
