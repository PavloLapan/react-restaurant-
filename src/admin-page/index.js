import React from 'react';
import AdminHeader from './admin-header'
import AdminTab from "./AdminTab";
import AdminFooter from "./admin-footer";

export default class AdminPage extends React.Component{
    render() {
        return (
            <div>
                <AdminHeader/>
                <AdminTab/>
                <AdminFooter/>
            </div>
        );
    }

}