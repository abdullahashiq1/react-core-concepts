import React from 'react';
import './Country.css';

/*
const Country = (props) => {
    
    return (
        <div className='country'>
            <h2>{props.name}</h2>
            <p>Area: {props.area}</p>
            <p><small>Population: {props.mens}</small></p>
        </div>
    );
};
*/

const Country = (props) => {
    const {name, area, population, flags} = props.country;
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>

        </div>
    );
};

export default Country;