import React, { useState } from "react";
//uses a useState to check  whether item is in cart
function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
//when the button is clicked
//it toggles state of isInCart
  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
