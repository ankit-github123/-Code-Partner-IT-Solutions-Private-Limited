import React from "react";
import "./button.css"
const Button = () => {
    return <div>
        <button className="buynow-Button">
            BUY NOW{`  `}
            <i class="far fa-credit-card"></i>
        </button>
        <button className="cart-Button">
            ADD TO CART    <i class="fas fa-shopping-cart"></i>
        </button>
    </div>
}

export default Button;