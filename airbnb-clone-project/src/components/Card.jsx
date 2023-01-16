import React from 'react'
import ratingIcon from '../assets/star.png'

function Card({
  title,
  desc,
  price,
  coverImg,
  location,
  openSpots,
  rating,
  reviewCount,
}) {
  return (
    <div className='card-container'>
      <div className='card-wrapper'>
        <img
          className='card-img'
          src={coverImg}
          alt='image of scuba diving'
        />
        <div className='card-content'>
          <img className='rating-img' src={ratingIcon} alt='star rating' />
          <span>&nbsp;{rating}</span>
          <span className='grey'>({reviewCount})&nbsp;</span>
          <span className='grey'>- {location}</span>
        </div>
        <p className='card-title'>{title}</p>
        <p className='card-price'>
          <span className='bold'>From ${price} </span> per person
        </p>
      </div>
    </div>
  )
}

export default Card
