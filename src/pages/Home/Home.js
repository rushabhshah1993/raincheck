import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './home.scss';

import {
    fetchCityWeather
} from './../../store/actions/weatherActions';

import Navbar from '../../components/Navbar/Navbar';

const Home = props => {
    useEffect(() => {
        props.fetchCityWeather();
    }, [])

    return (
        <div>
            <Navbar />
            Home
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCityWeather: city => dispatch(fetchCityWeather(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
