import React, { useState, useEffect, useRef } from 'react'
import Header from '../HeaderWithNavigation/Header'

const index = ({
  children,
  childrenProp,
  sliderItem,
  numberOfItemOnScreen = 1,
  isHeader = false,
  topHeader = 'Physical And Non Physical'
}) => {
  const [sliderIndex, setSliderIndex] = useState(0)
  const [sliderItemGroup, setSliderItemGroup] = useState([])
  const startX = useRef(null)
  const distanceToMoveX = useRef(0)

  const handleTouchStart = e => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchMove = e => {
    // Clear the starting position when the touch ends
    if (startX === null) return

    // Calculate the distance moved
    const currentX = e.touches[0].clientX
    distanceToMoveX.current = startX.current - currentX

    // Determine whether it's a left or right swipe
    // if (deltaX > 0) {
    //   console.log("Swipe left");
    //   // Perform actions for a left swipe
    // } else if (deltaX < 0) {
    //   console.log("Swipe right");
    //   // Perform actions for a right swipe
    // }

    // You can use deltaX to perform actions based on the swipe direction
    // For example, update a state, trigger an animation, etc.

    // Here, I'm just logging the deltaX for demonstration purposes
    // console.log(deltaX);
  }

  const handleTouchEnd = () => {
    console.log('end')
    if (distanceToMoveX.current > 0) {
      startX.current = null
      // setSliderIndex((prev) => prev + 1);
      setSliderIndex(index => {
        // if (index === sliderItemGroup.length - 1) return 0;
        if (index === sliderItemGroup.length - 1) return index

        return index + 1
      })
    } else if (distanceToMoveX.current < 0) {
      startX.current = null
      // setSliderIndex((prev) => prev - 1);
      setSliderIndex(index => {
        // if (index === 0) return sliderItemGroup.length - 1;
        if (index === 0) return index

        return index - 1
      })
    }
  }

  useEffect(() => {
    /*-------------------Making group of card---------*/
    // if (sliderItem && numberOfItemOnScreen > 1) {
    //   let group = [];
    //   for (let index = 0; index < sliderItem.length; index++) {
    //     const temp = [];
    //     temp.push(sliderItem[index]);

    //     //adding item in group
    //     let count = 1;

    //     while (count < numberOfItemOnScreen && index < sliderItem.length - 1) {
    //       temp.push(sliderItem[++index]);
    //       count++;
    //     }

    //     group.push(temp);
    //   }
    //   setSliderItemGroup(group);
    // } else {
    //   setSliderItemGroup(sliderItem);
    // }

    setSliderItemGroup(sliderItem) //no group of card
  }, [sliderItem])

  //   console.log(childrenProp, ": ", sliderItem);

  function showNextImage () {
    /*---------------Index change for GROUP and One card Movement---------------*/
    setSliderIndex(index => {
      if (index === sliderItemGroup.length - 1) return 0
      return index + 1
    })

    /*---------------Index change more then one card movementMovement---------------*/
    // setSliderIndex((index) => {
    //   //write ciode here
    // });
  }

  function showPrevImage () {
    /*---------------Index change for GROUP and One card Movement---------------*/
    setSliderIndex(index => {
      if (index === 0) return sliderItemGroup.length - 1
      return index - 1
    })

    /*---------------Index change more then one card movementMovement---------------*/
    // setSliderIndex((index) => {
    //   //write ciode here
    // });
  }

  return (
    <>
      {isHeader && (
        <Header
          topHeader={topHeader}
          next={showNextImage}
          prev={showPrevImage}
          sliderIndex={sliderIndex}
          lastIndex={sliderItemGroup.length - 1}
        />
      )}

      <div
        style={{
          width: `${
            100 * Math.ceil(sliderItemGroup.length / numberOfItemOnScreen)
          }%`, // for NOn-group
          // width: `${100 * sliderItemGroup.length}%`,
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
          padding: '1rem 0'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* // Original code/Group of Card   */}
        {/* {sliderItemGroup &&
          sliderItemGroup.map((sliderItem, index) => (
            <div
              key={index}
              style={{
                transform: `translateX(-${100 * sliderIndex}%)`,
                // transform: `translateX(-${(100 * sliderIndex)% + .25}%)`,
                display: "grid",
                gridTemplateColumns: `repeat(${numberOfItemOnScreen},1fr)`,
                gap: "1rem",
                width: "100%",
                transition: "transform 300ms ease-out",
              }}
            >
              {sliderItem.map((item, index) => (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    // height: "fit-content",
                  }}
                  className="container-item"
                  key={index}
                > */}
        {/* <Card batch={item} /> */}
        {/* {children} */}
        {/* {React.cloneElement(children, { ...childProps, batch: item })} */}
        {/* {React.cloneElement(children, { [childrenProp]: item })}
                </div>
              ))}
            </div>
          ))} */}

        {/*-----------------No Grouping----------*/}

        <div
          key={index}
          style={{
            transform: `translateX(-${100 * sliderIndex}%)`, //original for group method

            transform: `translateX(-${
              (100 /
                (Math.ceil(sliderItem.length / numberOfItemOnScreen) *
                  numberOfItemOnScreen)) *
              sliderIndex
            }%)`, // when moving one card at a time

            //   transform: `translateX(-${
            //     (100 / (Math.ceil(sliderItem.length / numberOfItemOnScreen) * numberOfItemOnScreen)) *
            //     sliderIndex *
            //     numberOfItemOnScreen
            //   }%)`,

            display: 'grid',
            gridTemplateColumns: `repeat(${
              Math.ceil(sliderItem.length / numberOfItemOnScreen) *
              numberOfItemOnScreen
            },1fr)`,
            gap: '1rem',
            width: '100%',
            transition: 'transform 300ms ease-out'
            // when moving set of card card at a time
          }}
        >
          {sliderItemGroup &&
            sliderItemGroup.map((batch, index) => (
              <div
                style={{ width: '100%', height: '100%', display: 'flex' }}
                className='container-item'
                key={index}
              >
                {React.cloneElement(children, { [childrenProp]: batch })}
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default index
