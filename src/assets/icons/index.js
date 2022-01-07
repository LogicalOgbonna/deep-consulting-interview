import locationIcon from './location.svg';
import sunnyIcon from './sunny.svg';
import clearIcon from './clear.svg';
import blizzardIcon from './blizzard.svg';
import blowing_snowIcon from './blowing_snow.svg';
import cloudy_clear_at_timesIcon from './cloudy-clear_at_times.svg';
import drizzle_nightIcon from './drizzle_night.svg';
import drizzle_sunIcon from './drizzle_sun.svg';
import drizzleIcon from './drizzle.svg';
import fogIcon from './fog.svg';
import hailIcon from './hail.svg';
import heavy_rainIcon from './heavy_rain.svg';
import humidityIcon from './humidity.svg';
import partly_cloudy_clear_at_nightIcon from './partly_cloudy_clear_at_night.svg';
import partly_cloudyIcon from './partly_cloudy.svg';
import rain_nightIcon from './rain_night.svg';
import rain_sunIcon from './rain_sun.svg';
import rain_thunderstormIcon from './rain_thunderstorm.svg';
import rainIcon from './rain.svg';
import scattered_showers_nightIcon from './scattered_showers_night.svg';
import scattered_showersIcon from './scattered_showers.svg';
import scattered_thunderstormIcon from './scattered_thunderstorm.svg';
import sever_thunderstormIcon from './sever_thunderstorm.svg';
import sleetIcon from './sleet.svg';
import snowIcon from './snow.svg';
import windIcon from './wind.svg';
import starIcon from './star.svg';
import editIcon from './edit.svg';
import deleteIcon from './delete.svg';
import backIcon from './back.svg';
import not_starIcon from './not_star.svg';

export {
    locationIcon,
    sunnyIcon,
    clearIcon,
    blizzardIcon,
    blowing_snowIcon,
    cloudy_clear_at_timesIcon,
    drizzle_nightIcon,
    drizzle_sunIcon,
    drizzleIcon,
    fogIcon,
    hailIcon,
    heavy_rainIcon,
    humidityIcon,
    partly_cloudy_clear_at_nightIcon,
    partly_cloudyIcon,
    rain_nightIcon,
    rain_sunIcon,
    rain_thunderstormIcon,
    rainIcon,
    scattered_showers_nightIcon,
    scattered_showersIcon,
    scattered_thunderstormIcon,
    sever_thunderstormIcon,
    sleetIcon,
    snowIcon,
    windIcon,
    starIcon,
    editIcon,
    deleteIcon,
    backIcon,
    not_starIcon,
};

const map = {
    sunny: sunnyIcon,
    clear: clearIcon,
    blizzard: blizzardIcon,
    blowing_snow: blowing_snowIcon,
    cloudy_clear_at_times: cloudy_clear_at_timesIcon,
    drizzle_night: drizzle_nightIcon,
    drizzle_sun: drizzle_sunIcon,
    drizzle: drizzleIcon,
    fog: fogIcon,
    mist: fogIcon,
    freezing_fog: fogIcon,
    hail: hailIcon,
    heavy_rain: heavy_rainIcon,
    humidity: humidityIcon,
    partly_cloudy_clear_at_night: partly_cloudy_clear_at_nightIcon,
    partly_cloudy: partly_cloudyIcon,
    rain_night: rain_nightIcon,
    rain_sun: rain_sunIcon,
    rain_thunderstorm: rain_thunderstormIcon,
    rain: rainIcon,
    scattered_showers_night: scattered_showers_nightIcon,
    scattered_showers: scattered_showersIcon,
    scattered_thunderstorm: scattered_thunderstormIcon,
    sever_thunderstorm: sever_thunderstormIcon,
    sleet: sleetIcon,
    snow: snowIcon,
    wind: windIcon,
};

export const iconMapper = (value) => map[value?.toLowerCase()?.replace(' ', '_')?.split(',')?.[0]] || map.sunny;