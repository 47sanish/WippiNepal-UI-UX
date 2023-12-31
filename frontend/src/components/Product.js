import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 thumbnail'>
   <Link to={`/product/${product._id}`}>
    <div style={{height:"200px", padding:"10px", position:"relative"}}>

        <img src={product.image} style={{height:"100%", overflow:"hidden", objectFit:"cover"}}/>
    </div>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>Rs.{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
