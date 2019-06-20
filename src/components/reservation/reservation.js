import React from 'react';


export default class Reservation extends React.Component {

    state={
        labels: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log('hello')
    };


    render() {
        return (
            <section className="booking ">
                <div className="container">
                    <div className="row text-center column">
                        <h2 className="gray">
                            RESERVATIONS
                        </h2>
                        <p className="yellow-line">
                            Book a table online. Leads will reach in your email.
                        </p>
                    </div>
                    <form className="jumborton" onSubmit={this.onSubmit}>
                        <div className="row ">
                            <div id="datepicker-container" className="datepicker-container">
                            <span className="column outline-element-container">
                                <label htmlFor="datepicker-input">Pickup a date</label>
                                <input id="datepicker-input" type="text"
                                       className="openemr-datepicker input-textbox outline-element incorrect"
                                       placeholder="Pick a date" objtype="7" name="action_element" objindex=""
                                       aria-label="Select Date"/>
                                <span className="correct-incorrect-icon"> </span>
                            </span>
                                <div id="datepicker"></div>
                            </div>

                            <div className="column">
                                <label htmlFor="">Your Name</label><i className="fa fa-pencil-square-o"></i>
                                <input type="text" name="" id="name" placeholder="Full Name"/>
                            </div>
                            <div className="column">
                                <label htmlFor="time">Time</label><i className="fa fa-clock-o"></i>
                                <input type="text" name="" id="time" placeholder="Pick a time"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <label htmlFor="email">Email Address</label><i className="fa fa-envelope-o"></i>
                                <input type="text" name="" id="email" placeholder="Yoyr Email ID"/>
                            </div>
                            <div className="column">
                                <label htmlFor="">Guests</label><i className="fa fa-user"></i>
                                <input type="text" name="" id="" placeholder="How many Of you"/>
                            </div>
                            <div className="column">
                                <label htmlFor="number">Phone Number</label><i className="fa fa-phone"></i>
                                <input type="text" name="" id="number" placeholder="Enter your number"/>
                            </div>
                        </div>
                        <button type="submit">Make Reservation</button>
                    </form>
                    <div className="reservation-footer">
                        <p>You can also call: <strong>+1 224 6787 004</strong> to make a reservation.</p>
                    </div>
                </div>
            </section>
        )
    }
}
