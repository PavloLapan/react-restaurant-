import React from 'react';
import styles from './style.module.css'

const AdminListItem = ({adminData}) => {
    const {date, name, time, email, guests, phone} = adminData;
    return (
        <div className="row">
            <p className={styles.p}>{date}</p>
            <p className={styles.p}>{name}</p>
            <p className={styles.p}>{time}</p>
            <p className={styles.p}>{email}</p>
            <p className={styles.p}>{guests}</p>
            <p className={styles.p}>{phone}</p>
        </div>
    );
};
export default AdminListItem