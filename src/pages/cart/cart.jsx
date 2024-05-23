import React, { useEffect, useState } from "react";
import { Purchased } from "../buyproduct/purchased";
import Logout from "../logout"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
//cart delete
const Cartdelete = (props) => {
  var pid = props.data.productid;
  var productname = props.data.productname;

  var usersData = localStorage.getItem("product");

  if (usersData) {
    var oldData = JSON.parse(usersData);
    var newData = oldData.filter(function (val) {
      return val.productid !== pid;
    });

    if (newData.length < oldData.length) {
      localStorage.setItem("product", JSON.stringify(newData));
      console.log("Cart item with product name '" + productname + "' has been deleted.");
      alert("Cart item with product name '" + productname + "' has been deleted.");
      window.location.reload(); // Reload the page after deleting the item
    } else {
      console.log("Cart item with product name '" + productname + "' not found.");
      alert("Cart item with product name '" + productname + "' not found.");
    }
  } else {
    console.log("Cart is empty.");
    alert("Cart is empty.");
  }
};

// main cart 
export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("product"));
    if (items) {
      setCartItems(items);
    }
  }, []);


  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1); // set to minimum value
    }
  };
  const handlePurchase = (item, count) => {
    const purchasedData = {
      productname: item.productname,
      productprice: item.productprice * count,
      productid: item.productid,
      productimage: item.productimage
    };
  
    const existingPurchasedData = localStorage.getItem("purchasedItem");
  
    let purchasedItems = [];
  
    if (existingPurchasedData) {
      try {
        purchasedItems = JSON.parse(existingPurchasedData);
        if (!Array.isArray(purchasedItems)) {
          purchasedItems = [];
        }
      } catch (error) {
        purchasedItems = [];
      }
    }
  
    purchasedItems.push(purchasedData);
    localStorage.setItem("purchasedItem", JSON.stringify(purchasedItems));
  
    alert("You purchased '" + item.productname + "'. Thanks for shopping!");
  };
  
  
  return (
    <div>
      <h1>Cart Items</h1>
      <hr className="hr1" />
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>Product: {item.productname}</p>
          <p>Price: {item.productprice*count}</p>
          <p>
          Quantity:
            <button onClick={handleIncrement}>
              +
            </button>
            {count}
            <button onClick={handleDecrement}>
              -
            </button>
          </p>
          <img src={item.productimage} alt={item.productname} />
          <div>
            <button
              className="button"
              onClick={() => Cartdelete({ data: item })}>
              Delete from cart
            </button>
          </div>
         
          <div>
          <button className="button" onClick={() => handlePurchase(item, count)}>
  Buy
</button>
          </div>
        </div>
      ))}
       <Logout></Logout>
    </div>
  );
};
