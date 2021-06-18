import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './home.scss';

import {
    fetchCityWeather
} from './../../store/actions/weatherActions';

import Navbar from '../../components/Navbar/Navbar';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import FutureWeather from './FutureWeather/FutureWeather';


const Home = props => {
    useEffect(() => {
        props.fetchCityWeather();
    }, [])

    return (
        <div>
            <Navbar />
            <CurrentWeather />
            <FutureWeather />
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
