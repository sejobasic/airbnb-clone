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
          className='activity-img'
          src={coverImg}
          alt='image of scuba diving'
        />
        <div className='card-content'>
          <img className='rating-img' src={ratingIcon} alt='star rating' />
          <span>{rating}</span>
          <span className='grey'>({reviewCount})</span>
          <span className='grey'>{location}</span>
        </div>
        <p>{title}</p>
        <p>
          <span className='bold'>From ${price} </span> per person
        </p>
      </div>
    </div>
  )
}

export default Card
