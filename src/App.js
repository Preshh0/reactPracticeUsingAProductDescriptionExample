// import logo from './logo.svg';
import './App.css';
import Product from "./Product"
import productsData from "./vschoolProducts"

function App() {
  //  const productComponents = productsData.map(item => {
  //     return (
  //       <Product key={item.id} product={item} />
  //     )
  //   }) 
    // OR

    const productComponents = productsData.map(item => <Product key={item.id} product={item} />)
    
  return (
    <div>
      {productComponents}
    </div>
  );
}

export default App;
