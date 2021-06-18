import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faMapMarkerAlt, faThermometerHalf, faUmbrella,
    faHouseUser, faCloudSunRain, faSnowman,
    faSmog, faWind, faExclamationTriangle,
    faSun, faCloudSun
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

import store from './store/store';

import Home from './pages/Home/Home';

library.add(
    faMapMarkerAlt, faThermometerHalf, faUmbrella,
    faHouseUser, faCloudSunRain, faSnowman,
    faSmog, faWind, faExclamationTriangle,
    faSun, faCloudSun
);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);
