import * as variables from './../__variables';

const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

const week = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'
]

export const convertWeatherUnit = (from, to, value) => {
    switch(from) {
        case variables.KELVIN:
            if(to === variables.CELSIUS) return value - 273.15;
            if(to === variables.FAHRENHEIT) return ((value - 273.15)*1.8)+32;
        case variables.CELSIUS:
            if(to === variables.FAHRENHEIT) return (value*1.8)+32;
            if(to === variables.KELVIN) return value + 273.15;
        case variables.FAHRENHEIT:
            if(to === variables.CELSIUS) return (value - 32)/1.8;
            if(to === variables.KELVIN) return ((value - 32)/1.8)+273.15;
        default: return value;
    }
}

export const fetchCurrentDate = () => {
    let date = new Date();
    return `${week[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
