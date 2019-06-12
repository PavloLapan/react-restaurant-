import React from 'react';
import thumb7 from '../../img/thumb7.png'
import thumb6 from '../../img/thumb6.png'
import thumb5 from '../../img/thumb5.png'

export default class Features extends React.Component{
    render() {
        return (
            <section className="features">
                <div className="container">
                    <div className="row text-center column">
                        <h2 className="white">
                            OUR FEATURES
                        </h2>
                        <p className="yellow-line">
                            Little things make us best in town</p>
                    </div>
                    <div className="row justify">
                        <div className="col-4 w-25 feature-box">
                            <img src={thumb5} alt=""/>
                                <h1 className="yellow-line">SERVING WITH LOVE</h1>
                                <p>Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu,
                                    maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel
                                    ullamcorper turpis varius eu.</p>
                        </div>
                        <div className="col-4 w-25 feature-box">
                            <img src={thumb6} alt=""/>
                                <h1 className="yellow-line">SERVING WITH LOVE</h1>
                                <p>Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu,
                                    maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel
                                    ullamcorper turpis varius eu.</p>
                        </div>
                        <div className="col-4 w-25 feature-box">
                            <img src={thumb7} alt=""/>
                                <h1 className="yellow-line">SERVING WITH LOVE</h1>
                                <p>Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu,
                                    maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel
                                    ullamcorper turpis varius eu.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}