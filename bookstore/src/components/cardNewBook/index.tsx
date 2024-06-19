import React from 'react'
import { ICardBook } from '../../types/ICardBook'
import './index.scss'

export const CardNewBook: React.FC<ICardBook> = (props) => {
  return (
    <div className="wrapper-card" id={props.isbn13}>
        <div className="wrap-img">
            <img className="img" src={props.image} />
        </div>
        <div className="card-name">
            <p className="name-book">{props.title}</p>
        </div>
        <div className="card-description">
            <p className="author-and-year">{props.subtitle}</p>
        </div>
        <div className="card-price">
            <p className="price">{props.price}</p>
        </div>
    </div>
  )
}
