import React from "react";
import { connect } from "react-redux";
import MenuItem from "./menu-list-item";
import Spinner from "../../spinner/spinner";
import dataMenu from "../../../services/db.js";
import ErrorIndicator from "../../error-indicator/error-indicator";

class MenuItemList extends React.Component {
  state = {
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { isLoading, error } = this.state;
    const { filteredDataMenu } = this.props;

    if (isLoading) {
      return <Spinner />;
    } else if (error) {
      return <ErrorIndicator />;
    } else {
      return (
        <div className="d-flex">
          <div className="col-12">
            {filteredDataMenu.map((item, index) => {
              return <MenuItem key={index} item={item} />;
            })}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ DataList: { filteredDataMenu } }) => ({
  filteredDataMenu: filteredDataMenu || dataMenu
});

export default connect(
  mapStateToProps,
  null
)(MenuItemList);
