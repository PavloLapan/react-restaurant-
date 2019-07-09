import React from 'react'
import styles from './style.module.css'

const MenuItem = ({item: { name, price, description }}) => {
    return (
        <div className="column dishes">
            <div className="d-flex between">
                <h2 className={styles.name}>{name}</h2>
                <h3 className={styles.price}><span>$</span>{price}</h3>
            </div>
            <p className={styles.desc}>{description}</p>
            <div className="dotted"></div>
        </div>
    )
}
export default MenuItem;