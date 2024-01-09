import { action, makeObservable, observable, runInAction } from 'mobx';
import { getAdcode, getForecastWeather, getNowWeather } from '@services/weather';

class WeatherStore {
  constructor() {
    makeObservable(this, {
      getAdcode: action,
      getForecastWeather: action.bound,
      getNowWeather: action.bound,
    });
  }

  getAdcode = () => {
    return getAdcode();
  };

  getForecastWeather = (adCode) => {
    return getForecastWeather(adCode);
    // runInAction(() => {
    //   this.weatherForecast = res;
    // });
  };

  getNowWeather = (adCode) => {
    return getNowWeather(adCode);
    // runInAction(() => {
    //   this.weatherNow = res;
    // });
  };
}

export default new WeatherStore(); // react-hooks中使用
