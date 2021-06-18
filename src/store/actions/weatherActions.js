import * as actions from './../actiontypes';
import axios from 'axios';

export const fetchCityWeather = (city = 'Mumbai') => {
    return dispatch => {
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=60dfad51347e098c9a6b000ced44c353`;
        axios.get(url)
            .then(response => {
                dispatch(setWeatherData(response.data.city, response.data.list));
            })
            .catch(error => {
                dispatch(requestFailure(error));
            })
    }
}

export const setWeatherData = (city, data) => {
    return {
        type: actions.SET_WEATHER_DATA,
        payload: {
            city: city,
            data: data
        }
    }
}

export const requestInProgress = () => {
    return {
        type: actions.REQUEST_IN_PROGRESS
    }
}

export const requestFailure = error => {
    return {
        type: actions.REQUEST_FAILURE,
        error: error
    }
}
