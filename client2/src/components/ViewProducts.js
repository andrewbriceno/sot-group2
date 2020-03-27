import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';

const ViewProducts = () => {
    //TODO: find a way to eliminate productsJSX
    const [products, setProducts] = useState([]);
    const [productsJSX, setProductsJSX] = useState([]);

    const ProductItem = (item, letter) => {
      console.log(item.name.toUpperCase()[0]);
      console.log(letter.letter);
      if(item.name.toUpperCase()[0] == letter.letter){
          return (<div>{item.name}</div>);
      }
      else{
          letter.letter = item.name.toUpperCase()[0];
          return(
              [
              <h5>{letter.letter}</h5>,
              <div>{item.name}</div>
              ]
          );
      }
  }

  useEffect( () => {
    axios.get(`http://localhost:${config.server_port}/api/users/get_product`)
      .then(res => {
          const items = res.data;
//

          const lastLetter = {letter : ""}
          setProducts({ items });
          setProductsJSX(items.map(item => ProductItem(item, lastLetter)));
      })
  }, []);

  return (
    <div style={{backgroundColor: "white"}}>
      { productsJSX }
    </div>
  );
  
};
export default ViewProducts;


