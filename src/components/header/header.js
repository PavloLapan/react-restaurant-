import React from 'react';
import {Link} from 'react-router-dom'
import logosmall from '../../img/logosmall.png'
import logo from '../../img/logo.png'
import arrowdown from '../../img/arrow-down.png'


const Header = () => {
    const toggleBottom = () =>{
        window.scroll({top: 800, left: 0, behavior: 'smooth' })
    };

    return(
        <header>
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
                                    <li><Link to='' href="#">Home</Link></li>
                                    <li><Link to='' href="#">About</Link></li>
                                    <li><Link to='' href="#">Actions</Link></li>
                                    <li><Link to='' href="#">Reserve</Link></li>
                                    <li><Link to='' href="#">Menu</Link></li>
                                    <li><Link to='' href="#">Get subscribed</Link></li>
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
                        <Link to=''>Home</Link>
                        <Link to=''>About</Link>
                        <Link to=''>Actions</Link>
                        <Link to=''>Reserve</Link>
                        <Link to=''>Menu</Link>
                        <Link to=''>Get subscribed <i className="fa fa-star" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="content" id='content'>
                    <img src={logo} alt=""/>
                        <h1>DELICIOUS FOOD</h1>
                        <p>Tomato is a delitious restaurant website template</p>
                        <div className="arrow">
                            <img className="button" src={arrowdown} alt="" onClick={toggleBottom}/>
                        </div>
                </div>
            </div>
        </header>
    )
};
export default Header;