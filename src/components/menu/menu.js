import React from 'react'

import foodsquare from "../../img/foodsquare.png"
import opentable from "../../img/opentable.png";
import tripadvisor from "../../img/tripadvisor.png"
import zomato from "../../img/zomato.png";
import MenuItemList from './MenuItemList';
import MenuCategoryList from '../menu/MenuCategoryList'


export default class Menu extends React.Component{
    //componentDidMount() {
        //fetch('../menu/menu.json')
        //.then(result => this.setState({menu : result}));
    //}

    render() {

        return (
        
        <section className="our-menu ">
        
        <div className="container p-4">
        
        <div className="row text-center column">
        
        <h2 className="gray">
        
        OUR MENU
        
        </h2>
        
        <p className="yellow-line">
        
        These fine folks trusted the award winning restaurant.
        
        </p>
        
        </div>
        
        <MenuCategoryList />
        
        <MenuItemList />
        
        <div className="row column">
        
        <button type="button" className="button">Explore our menu</button>
        
        <h2 className="gray">
        
        TRUSTED BY
        
        </h2>
        
        <p className="yellow-line">
        
        These fine folks trusted tha award winning restaurant
        
        </p>
        
        <div className="d-flex">
        
        <img src={foodsquare} alt=""/>
        
        <img src={opentable} alt=""/>
        
        <img src={tripadvisor} alt=""/>
        
        <img src={zomato} alt=""/>
        
        </div>
        
        </div>
        
        <div className="row column jumborton text-center subscribe">
        
        <h2 className="gray">
        
        INSTAGRAM
        
        </h2>
        
        <p>
        
        We love posting photos of our coustomers having a good time
        
        </p>
        
        <p className="blue-line">
        
        Get subscribe!
        
        </p>
        
        <form action="">
        
        <input type="text" placeholder="Get your nickname!"/>
        
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
        
        </form>
        </div>
        </div>
        
        </section>
        
        );
        }

}