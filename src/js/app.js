(function ($) {
    'use strict';
    System.log('Init smart-weather');

    //first initialize
    collectWeatherData();

    //read config
    let config = System.moduleConfig('smart-weather');

    console.log(config);

    //600000 ms are 10 minutes
    setInterval(function () {
        collectWeatherData();
    }, 600000);

    function collectWeatherData() {
        $.simpleWeather({
            woeid: '667931',
            unit: 'c',
            success: function (weather) {
                $('.smart-weather .current-temperature').html(weather.temp + '&deg;' + weather.units.temp);
                $('.smart-weather .current-position').html(weather.city + ' ' + weather.region);

                let weatherIcon = code2Icon(weather.code);
                console.log(weather.forecast);
                $('.smart-weather .weather-icon').html('<i class="wi ' + weatherIcon + '"></i>');

                $('.smart-weather .forecast-container').html("");

                let count = 0;
                weather.forecast.forEach(function (item) {
                    if (count < config.maxForecasts) {
                        let weatherIcon = code2Icon(item.code);
                        let newItem = '<div class="forecast-item"><div class="row"><div class="col">'
                            + '<div class="weather-icon"><i class="wi ' + weatherIcon + '"></i></div></div><div class="col"><h1 class="date">' + item.date + '</h1>'
                            + '<div class="row center-y"><i class="zmdi zmdi-triangle-up"></i><div class="high"><span>' + item.high + '&deg;' + weather.units.temp + '</span></div>'
                            + '<div class="low"><i class="zmdi zmdi-triangle-down"></i><span>' + item.low + '&deg;' + weather.units.temp + '</span></div></div></div></div>'
                            + '</div>';
                        $('.smart-weather .forecast-container').append(newItem);

                        count++;
                    }
                })
            },
            error: function (res) {
                System.log('smart-weather: ' + res, 'error');
            }
        });
    }

    var code2Icon = function(code) {
        code = parseInt(code);
        switch (code) {
            case 0: return 'wi-tornado';
            case 1: return 'wi-tornado';
            case 2: return 'wi-tornado';
            case 3: return 'wi-thunderstorm';
            case 4: return 'wi-thunderstorm';
            case 5: return 'wi-rain-mix';
            case 6: return 'wi-rain-mix';
            case 7: return 'wi-rain-mix';
            case 8: return 'wi-hail';
            case 9: return 'wi-sprinkle';
            case 10: return 'wi-hail';
            case 11: return 'wi-showers';
            case 12: return 'wi-showers';
            case 13: return 'wi-snow';
            case 14: return 'wi-snow';
            case 15: return 'wi-snow';
            case 16: return 'wi-snow';
            case 17: return 'wi-hail';
            case 18: return 'wi-hail';
            case 19: return 'wi-fog';
            case 20: return 'wi-fog';
            case 21: return 'wi-fog';
            case 22: return 'wi-fog';
            case 23: return 'wi-cloudy-gusts';
            case 24: return 'wi-cloudy-windy';
            case 25: return 'wi-thermometer-exterior';
            case 26: return 'wi-cloudy';
            case 27: return 'wi-night-cloudy';
            case 28: return 'wi-day-cloudy';
            case 29: return 'wi-night-cloudy';
            case 30: return 'wi-day-cloudy';
            case 31: return 'wi-night-clear';
            case 32: return 'wi-day-sunny';
            case 33: return 'wi-night-clear';
            case 34: return 'wi-day-sunny-overcast';
            case 35: return 'wi-rain-mix';
            case 36: return 'wi-day-sunny';
            case 37: return 'wi-thunderstorm';
            case 38: return 'wi-thunderstorm';
            case 39: return 'wi-thunderstorm';
            case 40: return 'wi-thunderstorm';
            case 41: return 'wi-snow';
            case 42: return 'wi-snow';
            case 43: return 'wi-snow';
            case 44: return 'wi-day-cloudy';
            case 45: return 'wi-storm-showers';
            case 46: return 'wi-snow';
            case 47: return 'wi-thunderstorm';
            case 3200: return 'wi-cloud';
            default: return '';
        }
    };
})(jQuery);