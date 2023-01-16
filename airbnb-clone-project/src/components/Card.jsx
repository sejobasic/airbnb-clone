import React from 'react'
import ratingIcon from '../assets/star.png'

function Card({ item }) {
  return (
    <div className='card-container'>
     {item.openSpots < 1 && <div className='card-badge'>SOLD OUT</div>}
      <div className='card-wrapper'>
        <img
          className='card-img'
          src={item.coverImg}
          alt='image of scuba diving'
        />
        <div className='card-content'>
          <img className='rating-img' src={ratingIcon} alt='star rating' />
          <span>&nbsp;{item.stats.rating}</span>
          <span className='grey'>({item.stats.reviewCount})&nbsp;</span>
          <span className='grey'>- {item.location}</span>
        </div>
        <p className='card-title'>{item.title}</p>
        <p className='card-price'>
          <span className='bold'>From ${item.price} </span> per person
        </p>
      </div>
    </div>
  )
}

export default Card
