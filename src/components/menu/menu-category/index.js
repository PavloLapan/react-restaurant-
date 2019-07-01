import React from "react";
import styles from "./style.module.css";
import { connect } from "react-redux";
import dataMenu from "../../../services/db.js";

class MenuCategory extends React.Component {
  render() {
    const { categoryTitle } = this.props;
    return (
      <p
        className={styles.p}
        onClick={e => this.props.handleClick(categoryTitle)}
      >
        {categoryTitle}
      </p>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick: value => {
    dispatch({
      type: "FILTER_MENU_ACTION",
      payload:
        value === "ALL"
          ? dataMenu
          : dataMenu.filter(item => item.category === value)
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MenuCategory);
