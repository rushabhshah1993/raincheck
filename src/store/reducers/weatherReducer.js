import { cloneDeep } from 'lodash';

import * as actions from './../actiontypes';
import * as variables from './../../utils/__variables';

const initialState = {
    city: null,
    weatherData: [],
    requestFailure: false,
    isLoading: false,
    metric: variables.CELSIUS
};

const reducer = (state=initialState, action) => {
    let clonedState = cloneDeep(state);
    switch(action.type) {
        case actions.SET_WEATHER_DATA:
            clonedState.city = action.payload.city,
            clonedState.weatherData = action.payload.data;
            clonedState.isLoading = false;
            return clonedState;
        case actions.REQUEST_IN_PROGRESS:
            clonedState.isLoading = true;
            return clonedState;
        case actions.REQUEST_FAILURE:
            clonedState.weatherData = [];
            clonedState.isLoading = false;
            clonedState.requestFailure = true;
            return clonedState;
        default: return state;
    }
}

export default reducer;
