import React from "react";
import "../../App.css"
import {Product} from "../../product"
import { Products } from "./product";
import Logout from '../logout';

export const Shop = () => {
  return (
    <div className="">
      <h1>E-SHOP</h1>
     
      <div className="Products">
        {Product.map((product) => (
          <Products key={product.pid} data={product} />
        ))}
      </div>
      
      <Logout></Logout>
    </div>
    
  );
};


