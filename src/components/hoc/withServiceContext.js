import React from 'react';
import {ServiceConsumer} from "../service-context";

const withServiceContext = () => (Wrapped) => {
    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (Service) => {
                        return (<Wrapped {...props} Service={Service}/>)
                    }
                }
            </ServiceConsumer>)
    }
};

export default withServiceContext;