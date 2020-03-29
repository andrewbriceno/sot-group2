import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
<<<<<<< HEAD
import ViewProductItem from './ViewProductItem.js';

const ViewProducts = (props) => {
    //TODO: find a way to eliminate setProcutJSX
    const [product, setProducts] = useState([]);
    const [productsJSX, setProductsJSX] = useState([]);

    const productItem = (item, letter) => {
        if(! (item.name.toUpperCase()[0] == letter.letter)){
            letter.letter = item.name.toUpperCase()[0];
            console.log("new letter:" + item.name);
            return(
                <div className="name-letter card">
                    <h5>{letter.letter}</h5>
                    <a href = {"/product/" + item.name} className="text-secondary">{item.name}</a>
=======
import ViewProduct from './ViewProduct'

const ViewProducts = (props) => {
    //TODO: find a way to eliminate setProductsJSX
    const [products, setProducts] = useState([]);
    const [productsJSX, setProductsJSX] = useState([]);

    const Product = (product, letter) => {
        if(! (product.name.toUpperCase()[0] == letter.letter)){
            letter.letter = product.name.toUpperCase()[0];
            return(
                <div className="glossary-letter card">
                    <h5>{letter.letter}</h5>
                    <a href = {"/product/" + product.name} className="text-secondary">{product.name}</a>
>>>>>>> 3c2857ae595bd0f6a67eb9d245dbe673f9b055a6
                </div>
            );
        }
        else{
<<<<<<< HEAD
            return(<div><a href = {"/product/" + item.name} className="text-secondary">{item.name}</a></div>);
=======
            return(<div><a href = {"/product/" + product.name} className="text-secondary">{product.name}</a></div>);
>>>>>>> 3c2857ae595bd0f6a67eb9d245dbe673f9b055a6
        }
    }

    
<<<<<<< HEAD
    const doesContain = (name, product) => {
        let contains = false;
        product.forEach( (item) => {
            if(item.name === name){
=======
    const doesContain = (name, products) => {
        let contains = false;
        products.forEach( (product) => {
            if(product.name === name){
>>>>>>> 3c2857ae595bd0f6a67eb9d245dbe673f9b055a6
                contains = true;
            }
        });
        return contains;
    }

<<<<<<< HEAD
    const getItem = () => {
=======
    const getProduct = () => {
>>>>>>> 3c2857ae595bd0f6a67eb9d245dbe673f9b055a6
        if(!props.name){
            return <div style={{backgroundColor: "white"}} className="list-unstyled card-columns glossary">{productsJSX}</div>;
        }
        else if (productsJSX.size === 0){
<<<<<<< HEAD
            return <p>Loading Products Items...</p>
        }
        else if(doesContain(props.name, product) === false && product.length>0){
            document.location = "/product"
            return (<div><h3>Item not found</h3><p>Redirecting..</p></div>);
        }
        else{
            return <ViewProductItem name= {props.name}/>;
=======
            return <p>Loading Products...</p>
        }
        else if(doesContain(props.name, products) === false && products.length>0){
            document.location = "/products"
            return (<div><h3>Product not found</h3><p>Redirecting..</p></div>);
        }
        else{
            return <ViewProduct name = {props.name}/>;
>>>>>>> 3c2857ae595bd0f6a67eb9d245dbe673f9b055a6
        }
    }

    useEffect( () => {
      axios.get(`http://localhost:${config.server_port}/api/users/get_product`)
        .then(res => {
<<<<<<< HEAD
            const items = res.data;
=======
            const products = res.data;
>>>>>>> 3c2857ae595bd0f6a67eb9d245dbe673f9b055a6

            const compare = (a,b) => {
                if(a.name.toLowerCase()<b.name.toLowerCase()){
                    return -1
                }
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return 1
                }
                return 0;
            }

<<<<<<< HEAD
            items.sort( compare );

            const lastLetter = {letter : ""}
            setProducts(items);
            setProductsJSX(items.map(item => productItem(item, lastLetter)));
        })
    }, []);

    return getItem();
=======
            products.sort( compare );

            const lastLetter = {letter : ""}
            setProducts(products);
            setProductsJSX(products.map(product => Product(product, lastLetter)));
        })
    }, []);

    return getProduct();
>>>>>>> 3c2857ae595bd0f6a67eb9d245dbe673f9b055a6
    
};
export default ViewProducts;


