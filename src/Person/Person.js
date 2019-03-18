import React from 'react';
import './Person.css';



const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click} >My name is <strong> {props.name} </strong>, and i'm <strong> {props.age} </strong>  old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};


export default person;
