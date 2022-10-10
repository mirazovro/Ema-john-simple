import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (let product of cart) {
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h3>Order summary</h3>
      <p>selected item:{quantity}</p>
      <p>Total price:${total}</p>
      <p>Total shipping:${shipping}</p>
      <p>Tax:{tax}</p>
      <h3>Grand Total{grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
