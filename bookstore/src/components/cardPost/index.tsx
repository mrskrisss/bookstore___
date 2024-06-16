import React from 'react'
import './index.scss'

const CardPost: React.FC = () => {
  return (
    <div className="wrapper-card">
        <div className="wrap-img">
            <img className="img" src="#" />
        </div>
        <div className="card-name">
            <p className="name-book">Android Apps for Absolute Beginners, 2nd
            Edition </p>
        </div>
        <div className="card-description">
            <p className="author-and-year">by Lentin Joseph,  Apress 2018</p>
        </div>
        <div className="card-price">
            <p className="price">$31.38</p>
        </div>
    </div>
  )
}

export default CardPost
