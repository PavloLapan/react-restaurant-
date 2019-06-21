import React from 'react' 
import MenuItem from "./MenuItem";
import withServiceContext from '../hoc/withServiceContext';
import Service from '../hoc/withServiceContext';
import dispatch from '../hoc/withServiceContext';

import { connect } from 'react-redux';
import { fetchMenuData } from '../../actions';

class MenuItemList extends React.Component {
render()
 {
    const {dataMenu} = this.props;
    console.log(this.props);

  return(
   <div className="d-flex">
      <div className="col-6">
          {
            dataMenu.map((item)=>{
                return <MenuItem dataMenu={dataMenu}/>
            })
          }
      </div>
    </div>
  )
 }
};
const mapStateToProps=({DataList: {dataMenu}})=>{
 return {dataMenu}
}

const mapDispatchToProps=()=>{
  return{
    //fetchMenuData: fetchMenuData(Service, dispatch)
  }
}
export default withServiceContext()(connect(mapStateToProps, mapDispatchToProps)(MenuItemList))