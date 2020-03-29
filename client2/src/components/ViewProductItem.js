import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';

const ViewProductItem = (props) => {
    const [productItem, setProductItem] = useState([]);

    const createProductItem = (item) => {
        const JSX = [
            <h3>{item.title}</h3>,
            <p className="text-primary"><b>Name: </b> {item.name}</p>,
            <p className="text-primary"><b>Ailment: </b> {item.ailment}</p>
           
        ];
        
        return JSX;
    }

    useEffect( () => {
      axios.get(`http://localhost:${config.server_port}/api/users/get_product/${props.name}`)
        .then(res => {
            const item = res.data;
            
            setProductItem(item);
        })
    }, []);

    return (
      <div style={{backgroundColor: "white"}}>
        { createProductItem(productItem) }
      </div>
    );
    
};
export default ViewProductItem;
