"use client"
import React from 'react'
import Slider from 'react-infinite-logo-slider'



function InfiniteSlider() {
  return (
     <Slider
            width="250px"
            duration={10}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="https://www.svgrepo.com/show/303152/tinder-1-logo.svg" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://www.svgrepo.com/show/303121/forbes-logo.svg" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://www.svgrepo.com/show/303141/spotify-1-logo.svg" alt="any4" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://www.svgrepo.com/show/303143/microsoft-logo.svg" alt="any5" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://www.svgrepo.com/show/303132/coca-cola-logo.svg" alt="any5" className='w-36' />
            </Slider.Slide>
           
           
        </Slider>
      
    
  )
}

export default InfiniteSlider



