import React from 'react'
import './styles/Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {
  const[{}, dispatch] = useStateValue();

  const addToCart = () => {
    //add item to cart
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
  };

  return (
    <div className='product'>
        {/* this product goes in a grid setup, 2 on top then 3 in the
        following rows */}
     <div className='product__info'>
        {/* title; */}
        <p> {title} </p>

        {/* price */}
        <div className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </div>

        {/* rating */}
        <div className='product__rating'>
            {/* ⭐⭐⭐⭐⭐ */}
            {/* make an array of so many stars, and print out a star for how many stars there are */}
            {
                Array(rating)
                .fill()
                .map((_) => 
                <p>⭐</p>)
            }
        </div>
    </div>
    
        {/* picture of item */}
      <img
        src={image}
        alt='' />
    

        {/* add to cart button */}
        <button onClick={addToCart}>Add to Cart</button>

        
    </div>
  )
}

export default Product;