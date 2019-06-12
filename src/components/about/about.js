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
    <section class="about">
        <div class="row column text-center">
            <h2>
                THE RESTAURANT
            </h2>
            <p class="blue-line">
                A little about us and a breif history of how we started.
            </p>
        </div>
        <div class="row media">
            <div class="col-4">
                <img src={image1} alt=""/>
                <div class="images d-flex ">
                    <img src={image2} alt=""/>
                    <img src={image3} alt=""/>
                </div>
            </div>
            <div class="col-6">
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
    <section class="actions">
        <div class="container">
            <div class="row text-center column">
                <h2 class="white">
                    TODAY'S SPECIALS
                </h2>
                <p class="blue-line">
                    A little about us and a breif history of how we started.
                </p>
            </div>
            <div class="row">
                <div class="carousel-wrapper">
                    <span id="target-item-1"></span>
                    <span id="target-item-2"></span>
                    <span id="target-item-3"></span>
                    <div class="carousel-item item-1 light">
                        <h2>Pancake with Caramel</h2>
                        <p>If you are a fan of caramel cake, then you'll love our Pancake with caramel icecream. It's
                            not thick, but very tasty.
                        </p>
                        <a class="arrow arrow-prev" href="#target-item-3"></a>
                        <a class="arrow arrow-next" href="#target-item-2"></a>
                    </div>
                    <div class="carousel-item item-2 light">
                        <h2>Pancake with Caramel</h2>
                        <p>If you are a fan of caramel cake, then you'll love our Pancake with caramel icecream. It's
                            not thick, but very tasty.
                        </p>
                        <a class="arrow arrow-prev" href="#target-item-1"></a>
                        <a class="arrow arrow-next" href="#target-item-3"></a>
                    </div>
                    <div class="carousel-item item-3 light">
                        <h2>Pancake with Caramel</h2>
                        <p>If you are a fan of caramel cake, then you'll love our Pancake with caramel icecream. It's
                            not thick, but very tasty.
                        </p>
                        <a class="arrow arrow-prev" href="#target-item-2"></a>
                        <a class="arrow arrow-next" href="#target-item-1"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    )
}

export default About