import React from "react";

function Product(props){
    return(
        <div>
            <h2>Name: {props.product.name}</h2>    
            {/* <button onClick= {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}> Click for price </button> */}
            <p>
                {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})} -  {props.product.description}
            </p>
        </div>

     )
}

export default Product
 
