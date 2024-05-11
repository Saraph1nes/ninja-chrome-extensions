import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { weekName } from '@/common/constant';
import { observer, inject } from 'mobx-react';
import { getLocalStorageItem, setLocalStorageItem } from '@/common/utils/handleLocalStorage';

import './index.less';

const Weather = (props) => {
  const [weatherForecast, setWeatherForecast] = useState({
    week: '',
    dayweather: '',
    nightweather: '',
    daytemp: '',
    nighttemp: '',
    casts: [],
  });
  const [weatherNow, setWeatherNow] = useState({
    reporttime: '',
    province: '',
    city: '',
    weather: '',
    temperature: '',
    winddirection: '',
    windpower: '',
    humidity: '',
  });

  const weatherStore = props.WeatherStore;
  const { getForecastWeather, getNowWeather, getAdcode } = weatherStore;

  const refreshInterval = 4; // 日期多久需要刷新，单位：小时

  const getWeatherData = async () => {
    const adCodeRes = await getAdcode();
    const adCode = adCodeRes?.data?.adcode || 0;
    if (adCode.length > 0) {
      const getForecastWeatherRes = await getForecastWeather(adCode);
      const getNowWeatherRes = await getNowWeather(adCode);
      setWeatherForecast(getForecastWeatherRes.data.forecasts[0]);
      setWeatherNow(getNowWeatherRes.data.lives[0]);
      setLocalStorageItem('weather-forecast-data', getForecastWeatherRes.data.forecasts[0]);
      setLocalStorageItem('weather-now-data', getNowWeatherRes.data.lives[0]);
    }
  };

  const init = () => {
    const weatherForecastStorage = getLocalStorageItem('weather-forecast-data');
    const weatherNowStorage = getLocalStorageItem('weather-now-data');
    if (weatherForecastStorage && weatherNowStorage) {
      if (moment(weatherNowStorage.reporttime).add(refreshInterval, 'hours').isBefore(moment())) {
        getWeatherData();
        return;
      }
      setWeatherForecast(weatherForecastStorage);
      setWeatherNow(weatherNowStorage);
    } else {
      getWeatherData();
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      className="weather"
      onClick={() => {
        window.open('https://www.msn.cn/zh-cn/weather/forecast', '_blank');
      }}
    >
      {/* <div className='Title'>*/}
      {/*  <span>天气</span>*/}
      {/* </div>*/}
      <div className="weather-content">
        {/*<div className='basicInfos'>*/}
        {/*<span>{`${weatherNow.province || '未知'} ${weatherNow.city || '未知'}`}</span>*/}
        {/*<span>{moment().format('YYYY-MM-DD ddd')}</span>*/}
        {/*</div>*/}
        <div className="nowadays">
          {/*<div>*/}
          {/*  <span color='green'>{`${weatherNow.weather || '未知'} ${weatherNow.temperature || '未知'}℃`}</span>*/}
          {/*</div>*/}
          <div>
            <span color="cyan">{`${weatherNow.winddirection || '未知'}风 ${weatherNow.windpower || '未知'}级`}</span>
          </div>
          <div>
            <span color="blue">{`湿度 ${weatherNow.humidity || '未知'}`}</span>
          </div>
        </div>
        {weatherForecast.casts.length > 0 ? (
          <div className="predict">
            {weatherForecast.casts.map((Value, Index) => (
              <div key={Index} className="predict-item">
                <div>
                  {Index === 0 ? '今日' : weekName[Value.week]}
                  {/* {`(${moment(Value.date).format('MM月DD日')})`}*/}
                </div>
                <div>
                  {Value.dayweather === Value.nightweather
                    ? Value.dayweather
                    : `${Value.dayweather} 转 ${Value.nightweather}`}
                </div>
                <div>
                  {Value.daytemp === Value.nighttemp ? Value.daytemp : `${Value.nighttemp} ~ ${Value.daytemp}℃`}
                </div>
                {/* <div className='item'>*/}
                {/*  {Value.daywind === Value.nightwind && Value.daypower === Value.nightpower ?*/}
                {/*    `${Value.daywind}风${Value.daypower}级` :*/}
                {/*    `${Value.daywind}风${Value.daypower}级 ~ ${Value.nightwind}风${Value.nightpower}级`}*/}
                {/* </div>*/}
              </div>
            ))}
          </div>
        ) : (
          <div>暂无数据</div>
        )}
        <div className="footer">
          <span>{`${weatherNow.reporttime || '未知'}发布`}</span>
        </div>
      </div>
    </div>
  );
};

export default inject('WeatherStore')(observer(Weather));
