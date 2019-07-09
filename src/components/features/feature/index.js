import React from 'react';
import styles from './styles.module.css'

const Feature = ({data}) => {
    const {name, desc, src} = data;
    return (
        <div className="col-4 feature-box transparent">
            <img src={src} alt="" className={styles["w-100"]}/>
            <br className="yellow-line "/>
            <h1 className={styles.h1}>{name}</h1>
            <p className={styles.p}>{desc}</p>
        </div>
    );
};
export default Feature