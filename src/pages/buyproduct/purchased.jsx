import React, { useEffect } from "react";
import Logout from "../logout"
const Purchased = () => {
  // Retrieve purchased item data from local storage
  const retrievedData = JSON.parse(localStorage.getItem("purchasedItem"));

  return (
    <div>
      <h1>Purchased Items</h1>
      {retrievedData && retrievedData.length > 0 ? (
        retrievedData.map((item, index) => (
          <div key={index}>
            <p>ProductName: {item.productname}</p>
            <img src={item.productimage} alt={item.productname} />
            <p>Price: {item.productprice}</p>
            <p>Order_id: {item.productid} trace the package using this number</p>
            {/* Additional details or formatting */}
          </div>
        ))
      ) : (
        <p>No purchased items found.</p>
      )}
        <Logout></Logout>
    </div>
    
  );
};

export { Purchased };

