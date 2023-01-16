import React from 'react'
import grid from '../assets/grid.png'

function Hero() {
  return (
    <section className='hero-container'>
      <img src={grid} alt='hero grid images' />
      <h1>Online Experiences</h1>
      <h4>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h4>
    </section>
  )
}

export default Hero
