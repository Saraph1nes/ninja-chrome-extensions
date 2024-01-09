import axios from 'axios';
import { GD_WEATHER_KEY } from '@constant';

// 查询adcode用于天气查询
const getAdcode = () => {
  return axios.get('https://restapi.amap.com/v3/ip?parameters', {
    params: {
      key: GD_WEATHER_KEY,
    },
  });
};

// 查询预测天气数据
const getForecastWeather = (adcode) => {
  return axios.get('https://restapi.amap.com/v3/weather/weatherInfo?parameters', {
    params: {
      key: GD_WEATHER_KEY,
      city: adcode,
      extensions: 'all',
    },
  });
};

// 查询实时天气数据
const getNowWeather = (adcode) => {
  return axios.get('https://restapi.amap.com/v3/weather/weatherInfo?parameters', {
    params: {
      key: GD_WEATHER_KEY,
      city: adcode,
      extensions: 'base',
    },
  });
};

export { getNowWeather, getForecastWeather, getAdcode };
