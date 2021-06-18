import * as variables from './../__variables';

export const weatherUnits = {
    [variables.CELSIUS]: "°C",
    [variables.KELVIN]: "K",
    [variables.FAHRENHEIT]: "°F"
}

export const relatedInfo = [
    {
        label: "Cloudy",
        primary_location: "clouds",
        secondary_location: "all",
        unit: "%"
    },
    {
        label: "Humidity",
        primary_location: "main",
        secondary_location: "humidity",
        unit: "%"
    },
    {
        label: "Rain Volume (last 3 hours)",
        primary_location: "rain",
        secondary_location: "3h",
        unit: "mm"
    },
    {
        label: "Pressure",
        primary_location: "main",
        secondary_location: "pressure",
        unit: "hPa"
    },
    {
        label: "Visibility",
        primary_location: "visibility",
        secondary_location: null,
        unit: "m"
    },
    {
        label: "Wind Speed",
        primary_location: "wind",
        secondary_location: "speed",
        unit: "m/s"
    }
]

export const weatherMessage = {
    "Rain": {
        message: "It's raining in <city>. RAINCHECK recommends carrying an umbrella, unless you love getting wet in the rain! ;)",
        icon: "umbrella",
        alert: "warning"
    },
    "Thunderstorm":  {
        message: "It's stormy outside in <city>. Better stay indoors or you might find yourself blowing away!",
        icon: "house-user",
        alert: "danger"
    },
    "Drizzle": {
        message: "It's drizzling outside in <city>! If you are outside, check for rainbows in the sky!",
        icon: "cloud-sun-rain",
        alert: "normal"
    },
    "Snow": {
        message: "RAINCHECK just checked for snow in <city>. Better make sure you are wearing your woolens tight.",
        icon: "snowman",
        alert: "warning"
    },
    "Mist": {
        message: "Weather feels misty in <city>. Keep your eyes in front of you or you might crash into a pole! :P",
        icon: "smog",
        alert: "warning"
    },
    "Smoke": {
        message: "It's smoky outside in <city>. RAINCHECK recommends staying in or wearing a mask.",
        icon: "smog",
        alert: "warning"
    },
    "Haze": {
        message: "It's hazy in <city>. Could it be a worse time to drive? RAINCHECK recommends against driving in this weather.",
        icon: "smog",
        alert: "danger"
    },
    "Dust": {
        message: "*cough* *cough* It's a dust storm in <city>!",
        icon: "wind",
        alert: "danger"
    },
    "Ash": {
        message: "A volcano has erupted near <city>. RAINCHECK recommends staying indoors and waiting for local government for further instructions.",
        icon: "exclamation-triangle",
        alert: "danger"
    },
    "Fog": {
        message: "It's foggy out here in <city>. RAINCHECK recommends against driving in this weather.",
        icon: "smog",
        alert: "danger"
    },
    "Sand": {
        message: "It's a sandy weather in <city>.",
        icon: "wind",
        alert: "warning"
    },
    "Squall": {
        message: "<city> is literally blowing away. Stay in, stay safe!",
        icon: "wind",
        alert: "danger"
    },
    "Tornado": {
        message: "DANGER! There's an active tornado about <city>. Protect yourself and stay tuned in for further reports.",
        icon: "exclamation-triangle",
        alert: "danger"
    },
    "Clear": {
        message: "It's a beautiful clear day here in <city>. RAINCHECK wishes you a great day!",
        icon: "sun",
        alert: "normal"
    },
    "Clouds": {
        message: "It's getting cloudy in here at <city>. Will it rain meatballs?",
        icon: "cloud-sun",
        alert: "normal"
    }
}
