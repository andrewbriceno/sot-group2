import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';

const ViewGlossary = () => {
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
            setGlossary({ items });
            setGlossaryJSX(items.map(item => glossaryItem(item, lastLetter)));
        })
    }, []);

    return (
      <div style={{backgroundColor: "white"}}>
        { glossaryJSX }
      </div>
    );
    
};
export default ViewGlossary;
