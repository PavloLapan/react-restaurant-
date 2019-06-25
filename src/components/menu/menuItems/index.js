import React from 'react'
import dataMenu from '../../../services/db.js'
import MenuItem from "./menu-list-item";
import Spinner from "../../spinner/spinner";
import ErrorIndicator from "../../error-indicator/error-indicator";

class MenuItemList extends React.Component {

    state = {
        isLoading: true,
        dataMenu: [],
        error: null
    };

    componentDidMount() {
        this.setState({
            dataMenu, isLoading: false
        });
    }

    render() {
        const {isLoading, dataMenu, error} = this.state;
        console.log(dataMenu);

        if (isLoading) {
            return <Spinner/>
        }
        else if (error) {
            return <ErrorIndicator/>
        }
        else {
            return (
                <div className="d-flex">
                    <div className="col-12">
                        {
                            dataMenu.map((item, index) => {
                                return <MenuItem key={index} item={item} />
                            })
                        }
                    </div>
                </div>
            )
        }
    }
}

export default MenuItemList