import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CurrentWeather.scss';

import {
    fetchCurrentDate, convertWeatherUnit
} from './../../../utils/js/utils';
import {
    weatherUnits, relatedInfo, weatherMessage
} from './../../../utils/js/config';
import * as variables from './../../../utils/__variables';

const CurrentWeather = props => {
    const [showMsg, toggleMsg] = useState(true);
    let currentDate, mainTemp, tempImg,
        weatherDesc, feelsLike, cityName,
        otherInfo, message;
    if(!currentDate) {
        currentDate = fetchCurrentDate();
    }

    if(props.weather.weatherData.length) {
        let todayDate = new Date().getDate();
        let todayHour = new Date().getHours();
        let latestWeather = props.weather.weatherData.filter(datum => {
            return new Date(datum.dt_txt).getDate() === +todayDate;
        }).reduce((prev, current) => {
            return (current - todayHour) < (prev - todayHour) ? curr : prev;
        }) 

        // let latestWeather = props.weather.weatherData[0];
        let city = props.weather.city;
        let iconUrl = `http://openweathermap.org/img/wn/${latestWeather.weather[0].icon}@2x.png`;
        let tempValue = convertWeatherUnit(variables.KELVIN, props.weather.metric, latestWeather.main.temp).toFixed(1);
        let feelsLikeValue = convertWeatherUnit(variables.KELVIN, props.weather.metric, latestWeather.main.feels_like).toFixed(1);
        let weatherDescMsgObj = weatherMessage[latestWeather.weather[0].main];
        let weatherDescMessage = weatherDescMsgObj.message.replace('<city>', city.name);
        let msgClassNames = [styles.msg, styles[weatherDescMsgObj.alert]];

        mainTemp = `${tempValue}${weatherUnits[props.weather.metric]}`;
        feelsLike = `${feelsLikeValue}${weatherUnits[props.weather.metric]}`;
        tempImg = <img src={iconUrl} className={styles.weatherIcon} />;
        weatherDesc = latestWeather.weather[0].main;
        cityName = `${city.name}, ${city.country}`;

        otherInfo = relatedInfo.map(value => {
            let infoValue = value.secondary_location ? 
            latestWeather[value.primary_location][value.secondary_location] :
            latestWeather[value.primary_location];

            return (
                <div key={value.label} className={styles.item}>
                    <span className={styles.infoLabel}>{value.label}</span>
                    <div className={styles.infoValue}>
                        <span className={styles.value}>{infoValue}</span> 
                        <span className={styles.unit}>{value.unit}</span>
                    </div>
                </div>
            )
        }) 

        message = (
            <div className={msgClassNames.join(' ')}>
                <FontAwesomeIcon icon={weatherDescMsgObj.icon} size="2x" />
                <span>{weatherDescMessage}</span>
                <span className={styles.close} onClick={() => toggleMsg(false)}>x</span>
            </div>
        )
    }

    return (
        <div className={styles.currentWeatherContainer}>
            <div className={styles.currentWeatherHeader}>
                <div className={styles.locationInfo}>
                    <span className={styles.date}>{currentDate}</span>
                    <span className={styles.city}>{cityName}</span>
                </div>
                {
                    showMsg &&
                    <div className={styles.messageContainer}>{message}</div>
                }
            </div>
            <div className={styles.weatherContainer}>
                <div className={styles.mainWeatherInfo}>
                    <div className={styles.weather}>    
                        <div className={styles.weatherDescContainer}>
                            <span className={styles.weatherDesc}>
                                {weatherDesc}
                            </span>
                            {tempImg}
                        </div>
            
                        <div className={styles.weatherTemp}>
                            <span className={styles.temperature}>{mainTemp}</span>
                            <FontAwesomeIcon icon="thermometer-half" size="lg" />
                        </div>

                        <span className={styles.feelsLike}>Feels like: {feelsLike}</span>
                    </div>
                </div>
                <div className={styles.weatherRestInfo}>
                    { otherInfo }
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

export default connect(mapStateToProps)(CurrentWeather);
