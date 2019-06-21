import React, {Component} from 'react';
import styles from './style.module.css'

export default class ErrorIndicator extends Component {
    render() {
        return (
            <div className={styles.jumbotron}>
                <h2 className='text-center text-warning'>Error</h2>
            </div>
        );
    }
}