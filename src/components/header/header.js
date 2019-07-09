import React from 'react';
import {Link} from 'react-router-dom'
import logosmall from '../../img/logosmall.png'
import logo from '../../img/logo.png'
import arrowdown from '../../img/arrow-down.png'

function scrollHome() {
    let goal = document.getElementsByClassName('home')[0];
    goal.scrollIntoView({behavior: 'smooth'});
}

function scrollAbout() {
    let goal = document.getElementsByClassName('about')[0];
    goal.scrollIntoView({behavior: 'smooth'});
}

function scrollReserve() {
    let goal = document.getElementsByClassName('booking')[0];
    goal.scrollIntoView({behavior: 'smooth'});
}

function scrollFeature() {
    let goal = document.getElementsByClassName('features')[0];
    goal.scrollIntoView({behavior: 'smooth'});
}

function scrollMenu() {
    let goal = document.getElementsByClassName('our-menu')[0];
    goal.scrollIntoView({behavior: 'smooth'});
}

function scrollSubscribe() {
    let goal = document.getElementsByClassName('subscribe')[0];
    goal.scrollIntoView({behavior: 'smooth'});
}

const Header = () => {
    const toggleBottom = () => {
        window.scroll({top: 800, left: 0, behavior: 'smooth'})
    };

    return (
        <header className="home">
            <div className="container-fluid-header">
                <div className="outer-menu">
                    <input className="checkbox-toggle" type="checkbox"/>
                    <div className="hamburger">
                        <div></div>
                    </div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><Link to='' onClick={scrollHome}>Home</Link></li>
                                    <li><Link to='' onClick={scrollAbout}>About</Link></li>
                                    <li><Link to='' onClick={scrollFeature}>Our feature</Link></li>
                                    <li><Link to='' onClick={scrollMenu}>Menu</Link></li>
                                    <li><Link to='' onClick={scrollSubscribe}>Get subscribed </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row menu-fixed">
                    <div className="logo d-flex">
                        <img src={logosmall} alt=""/>
                        <p>Oxygen</p>
                    </div>
                    <div className="d-flex main-menu">
                        <Link to='' onClick={scrollHome}>Home</Link>
                        <Link to='' onClick={scrollAbout}>About</Link>
                        <Link to='' onClick={scrollFeature}>Our feature</Link>
                        <Link to='' onClick={scrollMenu}>Menu</Link>
                        <Link to='' onClick={scrollSubscribe}>Get subscribed <i className="fa fa-star"
                                                                                aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="content" id='content'>
                    <img src={logo} alt=""/>

                    <h1>DELICIOUS FOOD</h1>
                    <a href="/book-table">
                        <button className="site-header__btn">book a table</button>
                    </a>

                    <div className="arrow">
                        <img className="button" src={arrowdown} alt="" onClick={toggleBottom}/>
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;