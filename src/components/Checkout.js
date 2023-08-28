import React from "react";
import { useStateValue } from "./StateProvider";
import './styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";


function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      {/* {
        // for (let i=0; i++; i<cart.length) {
        //   <div>{cart.item}</div>;
        // }
        my logic: ^ v
        cart.map(cartitem => (
          cartitem
        ))

      } */}
    <div className="checkout__left">
      <img className="checkout__ad"
      src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
      alt='' />

      {cart?.length === 0 ? (
        <div>
        <h2>Your Cart is Empty!</h2>
        <p>You have no items in your cart. To buy one or more items, click the 
          "Add to Cart" button by the item you want!
        </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Cart:</h2>

          {cart.map((item) => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          
        </div>
      )
      }
    </div>

      
        {cart?.length > 0 && (
          <div className="checkout__right">
          <Subtotal />
           </div>
        )}
     
    </div>
  );
}

export default Checkout;
