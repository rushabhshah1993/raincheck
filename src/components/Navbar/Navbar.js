import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './navbar.scss';

import Modal from './../Modal/Modal';

const Navbar = props => {
    const [modalDisplay, showModal] = useState(false);

    const modalBody = (
        <div className={styles.modalBody}>
            <span className={styles.modalSubText}>RAINCHECK is currently showing you the weather of</span>
            <p className={styles.modalCityName}>{props?.weather?.city?.name}</p>

            <hr />

            <div className={styles.chooseContainer}>
                <p className={styles.chooseHeader}>Not from {props?.weather?.city?.name}?</p>
                <div className={styles.inputContainer}>
                    <input type="text" className={styles.inputBox} placeholder={'Type a city'} />
                    <span className={styles.chooseBtn}>Choose</span>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className={styles.navbarContainer}>
                <div className={styles.brand}>
                    <span className={styles.brandName}>RAINCHECK</span>
                </div>
                <div className={styles.actionGroup}>
                    <div className={styles.cityInfo}>
                        <FontAwesomeIcon icon="map-marker-alt" />
                        {
                            props.weather.city ?
                            <span className={styles.cityName} onClick={()=>showModal(true)}>{props.weather.city.name}</span> :
                            <span>Loading...</span>
                        }
                    </div>
                </div>
            </div>
            <Modal 
                show={modalDisplay} 
                body={modalBody} 
                cancel={() => showModal(false)}
                closeSymbol={true}
                header={'Choose another city'} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(Navbar);
