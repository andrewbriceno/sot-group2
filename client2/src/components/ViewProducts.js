import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';

const ViewProducts = () => {
    //TODO: find a way to eliminate productsJSX
    const [products, setProducts] = useState([]);
    const [productsJSX, setProductsJSX] = useState([]);

    useEffect( () => {
      axios.get(`http://localhost:${config.server_port}/api/users/get_product`)
        .then(res => {
          const products = res.data;
          setProducts({ products });
          setProductsJSX(products.map(product => <li>{product.name}</li>));
        })
    }, []);

    return (
      <ul style={{backgroundColor: "white"}}>
        { productsJSX }
      </ul>
    );
    
};
export default ViewProducts;
