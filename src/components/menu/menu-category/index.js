import React from 'react'
import styles from './style.module.css'


class MenuCategory extends React.Component {


    render() {
        const {categoryTitle} = this.props;
        return(
            <p className={styles.p} onClick={this.ShowMenu}>{categoryTitle}</p>
        )
    }
}
export default MenuCategory