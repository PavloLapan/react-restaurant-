import React from 'react'
import data from '../../../services/db.json'
import MenuItem from "./menu-list-item";
import Spinner from "../../spinner/spinner";
import ErrorIndicator from "../../error-indicator/error-indicator";

class MenuItemList extends React.Component {

    state = {
        isLoading: true,
        dataMenu: [],
        error: null
    };

    fetchData() {
        fetch(data)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    dataMenu: data,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {isLoading, dataMenu, error} = this.state;
        console.log(dataMenu)

        if (isLoading) {
            return <Spinner/>
        }
        else if (error) {
            return <ErrorIndicator/>
        }
        else {
            return (
                <div className="d-flex">
                    <div className="col-6">
                        {
                            dataMenu.map((dataMenu) => {
                                return <MenuItem item={dataMenu} />
                            })
                        }

                    </div>
                </div>
            )
        }
    }
}

export default MenuItemList