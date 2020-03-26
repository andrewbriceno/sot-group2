import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import ViewGlossaryItem from './ViewGlossaryItem.js';
import { PromiseProvider } from 'mongoose';

const ViewGlossary = (props) => {
    //TODO: find a way to eliminate setGlossaryJSX
    const [glossary, setGlossary] = useState([]);
    const [glossaryJSX, setGlossaryJSX] = useState([]);

    const glossaryItem = (item, letter) => {
        const JSX = [];
        if(! (item.title.toUpperCase()[0] == letter.letter)){
            letter.letter = item.title.toUpperCase()[0];
            JSX.push(<br />);
            JSX.push(<h5>{letter.letter}</h5>);
        }
        JSX.push(<div><a href = {"/glossary/" + item.title} className="text-secondary">{item.title}</a></div>)
        return JSX;
    }

    
    const doesContain = (title, glossary) => {
        let contains = false;
        glossary.forEach( (item) => {
            if(item.title === title){
                contains = true;
            }
        });
        return contains;
    }

    const getItem = () => {
        if(!props.title){
            return <div style={{backgroundColor: "white"}}>{glossaryJSX}</div>;
        }
        else if (glossaryJSX.size === 0){
            return <p>you shouldnt be here wither</p>
        }
        else if(doesContain(props.title, glossary) === false && glossary.length>0){
            document.location = "/glossary"
            return (<div><h3>Item not found</h3><p>Redirecting..</p></div>);
        }
        else{
            return <ViewGlossaryItem title= {props.title}/>;
        }
    }

    useEffect( () => {
      axios.get(`http://localhost:${config.server_port}/api/users/get_glossary`)
        .then(res => {
            const items = res.data;

            const compare = (a,b) => {
                if(a.title.toLowerCase()<b.title.toLowerCase()){
                    return -1
                }
                if(a.title.toLowerCase()>b.title.toLowerCase()){
                    return 1
                }
                return 0;
            }

            items.sort( compare );

            const lastLetter = {letter : ""}
            setGlossary(items);
            setGlossaryJSX(items.map(item => glossaryItem(item, lastLetter)));
        })
    }, []);

    return getItem();
    
};
export default ViewGlossary;
