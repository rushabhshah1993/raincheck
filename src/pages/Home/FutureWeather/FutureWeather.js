import React from 'react';
import { connect } from 'react-redux';

import {
    get12PMData, prettyDate, convertWeatherUnit
} from './../../../utils/js/utils';
import { weatherUnits } from './../../../utils/js/config';
import * as variables from './../../../utils/__variables';

import styles from './FutureWeather.scss';

const FutureWeather = props => {
    let elements;
    
    if(props.weather.weatherData.length) {
        let conciseData = get12PMData(props.weather.weatherData);
        elements = conciseData.map(datum => {
            let date = new Date(datum.dt_txt);
            let iconUrl = `http://openweathermap.org/img/wn/${datum.weather[0].icon}@2x.png`;
            let temp = convertWeatherUnit(variables.KELVIN, props.weather.metric, datum.main.temp).toFixed(1)
            
            return (
                <div key={datum.dt} className={styles.weatherCard}>
                    <div className={styles.dateContainer}>
                        <span className={styles.date}>{prettyDate(date)}</span>
                        <span className={styles.time}>{date.getHours()} PM</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <img src={iconUrl} />
                        <span className={styles.weatherDesc}>{datum.weather[0].main}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.item}>
                            <span className={styles.label}>Rainfall</span>
                            <span className={styles.value}>{datum.rain["3h"]}mm</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.label}>Temperature</span>
                            <span className={styles.value}>{temp}{weatherUnits[props.weather.metric]}</span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={styles.futureWeatherContainer}>
            <p className={styles.title}>Weather for the next five days:</p>
            <div className={styles.cardContainer}>
                {elements}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(FutureWeather);
