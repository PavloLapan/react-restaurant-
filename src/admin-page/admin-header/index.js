import React from 'react';
import style from './style.module.css'

 const AdminHeader=()=>{
    const {orders} = this.props;
    return(
        <div className={style.head}>
            <h2>{orders} Page</h2>
        </div>
    )
};

export default AdminHeader;