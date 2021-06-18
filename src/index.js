import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

import store from './store/store';

import Home from './pages/Home/Home';

library.add(
    faMapMarkerAlt
);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);
