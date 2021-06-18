import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './navbar.scss';

const Navbar = props => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.brand}>
                <span className={styles.brandName}>RAINCHECK</span>
            </div>
            <div className={styles.actionGroup}>
                <div className={styles.cityInfo}>
                    <FontAwesomeIcon icon="map-marker-alt" />
                    {
                        props.weather.city ?
                        <span className={styles.cityName}>{props.weather.city.name}</span> :
                        <span>Loading...</span>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(Navbar);
