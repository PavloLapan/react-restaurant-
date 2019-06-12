import React from 'react';
import '../../style/style.css'
import '../../style/media.css'

import image1 from '../../img/thumb1.png'
import image2 from '../../img/thumb2.png'
import image3 from '../../img/thumb3.png'
import image4 from '../../img/signature.png'
import '../../style/carousel.css'

 const About = () => { 
    return(
<div>
    <section className="about">
        <div className="row column text-center">
            <h2>
                THE RESTAURANT
            </h2>
            <p className="blue-line">
                A little about us and a breif history of how we started.
            </p>
        </div>
        <div className="row media">
            <div className="col-4">
                <img src={image1} alt=""/>
                <div className="images d-flex ">
                    <img src={image2} alt=""/>
                    <img src={image3} alt=""/>
                </div>
            </div>
            <div className="col-6">
                <p>Cras ut viverra eros. Phasellus sollicitudin sapien id luctus tempor. Sed hend rerit inter dum
                    sagittis. Donec nunc lacus, dapibus nec interdum eget, ultrices eget justo. Nam purus lacus,
                    efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. In massa
                    est, dignissim in libero ac, fringilla ornare mi. Etiam interdum ligula purus.</p>
                <p>Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim
                    in diam dapibus sagittis. In massa est, dignissim in libero ac, fringilla ornare.</p>
                <img src={image4} alt=""/>
            </div>
        </div>
    </section>
    <section className="actions">
        <div className="container">
            <div className="row text-center column">
                <h2 className="white">
                    TODAY'S SPECIALS
                </h2>
                <p className="blue-line">
                    A little about us and a breif history of how we started.
                </p>
            </div>
            <div className="row">
                <div className="carousel-wrapper">
                    <span id="target-item-1"></span>
                    <span id="target-item-2"></span>
                    <span id="target-item-3"></span>
                    <div className="carousel-item item-1 light">
                        <h2>Pancake with Caramel</h2>
                        <p>If you are a fan of caramel cake, then you'll love our Pancake with caramel icecream. It's
                            not thick, but very tasty.
                        </p>
                        <a className="arrow arrow-prev" href="#target-item-3"/>
                        <a className="arrow arrow-next" href="#target-item-2"/>
                    </div>
                    <div className="carousel-item item-2 light">
                        <h2>Pancake with Caramel</h2>
                        <p>If you are a fan of caramel cake, then you'll love our Pancake with caramel icecream. It's
                            not thick, but very tasty.
                        </p>
                        <a className="arrow arrow-prev" href="#target-item-1"></a>
                        <a className="arrow arrow-next" href="#target-item-3"></a>
                    </div>
                    <div className="carousel-item item-3 light">
                        <h2>Pancake with Caramel</h2>
                        <p>If you are a fan of caramel cake, then you'll love our Pancake with caramel icecream. It's
                            not thick, but very tasty.
                        </p>
                        <a className="arrow arrow-prev" href="#target-item-2"></a>
                        <a className="arrow arrow-next" href="#target-item-1"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>)
};

export default About