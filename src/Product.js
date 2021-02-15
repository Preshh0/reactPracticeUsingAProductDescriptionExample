import React from "react";

// function display(props){
//     return props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})
// }
function Product(props){
    return(
        <div>
            <h2>Name: {props.product.name}</h2>    
            {/* <button onClick ={ function display(){console.log( props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"}))}}> Click for product</button> */}
            {/* <button onClick= {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}> Click for price </button> */}
            <p>
                {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})} -  {props.product.description}
            </p>
        </div>

     )
}

export default Product
 
