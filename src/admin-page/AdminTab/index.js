import React from 'react';
import AdminListItem from "./admin-list-item";

const AdminTab = () => {
    const {admineData: adminData} = this.props;

    {
        adminData.map((adminData)=>{
            return(
                 <div key={adminData.id}> <AdminListItem adminData={adminData}/></div>
                )
        })
    }
};

export default AdminTab;