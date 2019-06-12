import React from 'react';
import thumb8 from '../../img/thumb8.png'
import thumb9 from '../../img/thumb9.png'
import RecentPost from './recent_post'

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row justify footer">
                    <div className="w-25">
                        <h2>ABOUT US</h2>
                        <p>Duis leo justo, condimentum at purus eu,Aenean sed dolor sem. Etiam massa libero, auctor
                            vitae egestas et, accumsan quis nunc.Duis leo justo, condimentum at purus eu, posuere
                            pretium tellus.</p>
                        <small>Read more →</small>
                    </div>
                    <div className="w-25">
                        <h2>RECENT POST</h2>
                            <RecentPost
                                postImg={thumb8}
                                postDate="29 may 2019"
                                postText="Hand picked ingredients for our best customers"
                            />
                        <div className="mt-1">
                            <RecentPost
                                postImg={thumb9}
                                postDate="30 may 2019"
                                postText="Daily special foods that you will going to love"/>
                        </div>
                    </div>
                    <div className="w-25">
                        <h2>REACH US</h2>
                        <div className="row social ">
                            <a href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                            <a href=""><i className="fa fa-vk" aria-hidden="true"></i>
                            </a>
                            <a href=""><i className="fa fa-whatsapp" aria-hidden="true"></i>
                            </a>
                            <a href=""><i className="fa fa-telegram" aria-hidden="true"></i>
                            </a>
                            <a href=""><i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className=" contact-us column">
                            <p><i className="fa fa-map-marker"></i>28 Seventh Avenue,New York, 10014</p>
                            <p><i className="fa fa-phone"></i>Phone: (415) 124-5678</p>
                            <p><i className="fa fa-envelope-o"></i>support@restaurant.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p><i className="fa fa-copyright"></i>2019. Oxygen. All rights reserved. Designed with <i
                    className="fa fa-heart primary-color"></i> by Pavlo Lapan</p>
            </div>
        </footer>
    )
}

export default Footer