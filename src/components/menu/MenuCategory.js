import React from 'react' 
import {showFilteredMenu} from '../../actions/index.js'
import withServiceContext from '../hoc/withServiceContext';
import { connect } from 'react-redux';
//import { fetchMenuData } from '../../actions';

class MenuCategory extends React.Component
{
   render()
   {
    const {category} = this.props.categoryTitle;
    return(
      <a value={this.props.categoryTitle} onClick={this.ShowMenu}>{this.props.categoryTitle}</a>
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
   

//export default MenuCategory
