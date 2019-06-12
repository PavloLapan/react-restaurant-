import React from 'react'

import foodsquare from "../../img/foodsquare.png"
import opentable from "../../img/opentable.png";
import tripadvisor from "../../img/tripadvisor.png"
import zomato from "../../img/zomato.png";


export default class Menu extends React.Component{


    render() {
        return (
            <section className="our-menu">
                <div className="container p-4">
                    <div className="row text-center column">
                        <h2 className="gray">
                            OUR MENU
                        </h2>
                        <p className="yellow-line">
                            These fine folks trusted the award winning restaurant.
                        </p>
                    </div>
                    <div className="row list">
                        <a href="">ALL</a>
                        <a href="">STARTERS</a>
                        <a href="">BREAKFAST</a>
                        <a href="">LUNCH</a>
                        <a href="">DINNER</a>
                        <a href="">DESSERTS</a>
                    </div>
                    <div className="d-flex">
                        <div className="col-6">
                            <div className="column dishes">
                                <div className="d-flex between">
                                    <h2 className="name">ENGLISH ASPARAGUS</h2>
                                    <h3 className="price "><span>$</span>14.95</h3>
                                </div>
                                <p className="describtion">pellentesque enim. Aliquam tempor</p>
                                <div className="dotted"></div>
                            </div>
                            <div className="column dishes">
                                <div className="d-flex between">
                                    <h2 className="name">ENGLISH ASPARAGUS</h2>
                                    <h3 className="price "><span>$</span>14.95</h3>
                                </div>
                                <p className="describtion">pellentesque enim. Aliquam tempor</p>
                                <div className="dotted"></div>
                            </div>
                            <div className="column dishes">
                                <div className="d-flex between">
                                    <h2 className="name">ENGLISH ASPARAGUS</h2>
                                    <h3 className="price "><span>$</span>14.95</h3>
                                </div>
                                <p className="describtion">pellentesque enim. Aliquam tempor</p>
                                <div className="dotted"></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="column dishes">
                                <div className="d-flex between">
                                    <h2 className="name">ENGLISH ASPARAGUS</h2>
                                    <h3 className="price "><span>$</span>14.95</h3>
                                </div>
                                <p className="describtion">pellentesque enim. Aliquam tempor</p>
                                <div className="dotted"></div>
                            </div>
                            <div className="column dishes">
                                <div className="d-flex between">
                                    <h2 className="name">ENGLISH ASPARAGUS</h2>
                                    <h3 className="price "><span>$</span>14.95</h3>
                                </div>
                                <p className="describtion">pellentesque enim. Aliquam tempor</p>
                                <div className="dotted"></div>
                            </div>
                            <div className="column dishes">
                                <div className="d-flex between">
                                    <h2 className="name">ENGLISH ASPARAGUS</h2>
                                    <h3 className="price "><span>$</span>14.95</h3>
                                </div>
                                <p className="describtion">pellentesque enim. Aliquam tempor</p>
                                <div className="dotted"></div>
                            </div>
                        </div>
                    </div>
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
                    <div className="row column jumborton text-center">
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