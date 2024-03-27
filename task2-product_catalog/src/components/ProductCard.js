import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";

import "./ProductCard.css";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartState.cartList);
  const [itemInCart, setItemInCart] = useState(false);

  const { id, name, price, image, description } = product;

  useEffect(() => {
    if (cartItems.find((item) => item.id === id)) {
      setItemInCart(true);
    } else {
      setItemInCart(false);
    }
  }, [id, itemInCart, cartItems]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <div className="action">
        <p>${price}</p>

        {itemInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
