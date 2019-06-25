import React from 'react'
import MenuCategory from './index'

class MenuCategoryList extends React.Component
{
    render()
    {
        return(
            <div className="row list">
                <MenuCategory categoryTitle='ALL' />
                <MenuCategory categoryTitle='STARTERS' />
                <MenuCategory categoryTitle='BREAKFAST' />
                <MenuCategory categoryTitle='LUNCH' />
                <MenuCategory categoryTitle='DINNER' />
                <MenuCategory categoryTitle='DESSERTS' />
            </div>
        )
    }
}

export default MenuCategoryList