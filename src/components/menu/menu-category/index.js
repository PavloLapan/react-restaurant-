import React from 'react'
import {showFilteredMenu} from '../../../actions'
import withServiceContext from '../../hoc/withServiceContext';
import { connect } from 'react-redux';
import { fetchMenuData } from '../../../actions';
import styles from './style.module.css'

class MenuCategory extends React.Component {
    render() {
        const {categoryTitle} = this.props;
        return(
            <p className={styles.p} onClick={this.ShowMenu}>{categoryTitle}</p>
        )
    }
}

const mapStateToProps=({DataList: {menuFilter}})=>{
    return {}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        ShowMenu: (event) => {
            dispatch(showFilteredMenu(event.target.value));
        }
    }
}

export default withServiceContext()(connect(mapStateToProps, mapDispatchToProps)(MenuCategory))