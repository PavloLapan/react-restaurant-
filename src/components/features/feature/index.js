import React from 'react';

const Feature =  ({data})=>{
        const {name, desc, src} = data;
        return (
            <div className="col-4 w-25 feature-box">
                <img src={src} alt=""/>
                <h1 className="yellow-line">{name}</h1>
                <p>{desc}</p>
            </div>
        );
};
export default Feature