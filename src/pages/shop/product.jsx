import React from "react";

export const Cart = (props) => {
  // Convert the image to base64
  fetch(props.data.pimage)
    .then((response) => response.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        const base64String = reader.result;

        var productid = props.data.pid;
        var productname = props.data.pname;
        var productprice = props.data.price;
        var productimage = base64String;
        var productdetail = props.data.pdetail;
        var productcategory = props.data.pcategory;

        var usersData = localStorage.getItem("product");
        console.log(productimage);
        var userObj = {
          productid,
          productname,
          productprice,
          productimage,
          productdetail,
          productcategory,
        };

        if (usersData) {
          var oldData = JSON.parse(usersData);
          var res = oldData.filter(function (val) {
            return val.productid === productid; //&& val.productprice == productprice
          });

          if (res.length > 0) {
            alert("Product already exists in cart");
          } else {
            oldData.push(userObj);
            localStorage.setItem("product", JSON.stringify(oldData));
            alert("Product successfully added to cart");
          }
        } else {
          var arr = [];
          arr.push(userObj);
          localStorage.setItem("product", JSON.stringify(arr));
          alert("Product successfully added to cart");
        }
      };
      reader.onerror = () => {
        console.error("Failed to read image file");
      };
    })
    .catch((error) => {
      console.error(error);
    });
};

export const Products = (props) => {
  const { pid, pname, price, pimage, pdetail, pcategory } = props.data;

  return (
   
    <center>
    <div className="Product">
      <img src={pimage} alt={pname} />
      <div className="Description">
        <p>
          <b>{pname}</b>
        </p>
        <p>pkr{price}</p>
      </div>
      <button className="button" onClick={() => Cart(props)}>Add to cart</button>
    </div>
    
    </center>
  );
};







///
