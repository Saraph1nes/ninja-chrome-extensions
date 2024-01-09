import React, { useState } from 'react';
import { observer } from 'mobx-react';
// import Icon, { AlignLeftOutlined } from '@ant-design/icons';
// import Weather from '../weather';
// import { navBarPopData, WeatherSvg } from './constant';
import Hitokoto from './hitokoto';

import './index.less';

const Navbar = observer((props) => {

  // const [popVisible, setPopVisible] = useState(false);
  // const [weatherVisible, setWeatherVisible] = useState(false);
  //
  // const renderPopoverContent = () => {
  //   return <div gutter={16}
  //               className='nav-bar-popover-content'>
  //     {
  //       navBarPopData.map(item => <div key={item.id}
  //                                      className='nav-bar-popover-content-item'
  //                                      span={12}>
  //         <div className='nav-bar-popover-content-item-card'
  //               hoverable
  //               bordered>
  //           <a className='content-wrapper'
  //              href={item.url}
  //              target='_blank'
  //              rel='noreferrer'>
  //             <div className='title'>{item.name}</div>
  //           </a>
  //         </div>
  //       </div>)
  //     }
  //   </div>;
  // };

  if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('Dark mode is supported', window.matchMedia('(prefers-color-scheme)').media);
  }

  // const switchDarkMode = () => {
  //   const content = document.getElementsByClassName('new-tab')[0]
  //   content.setAttribute('class', 'light-scheme');
  // };

  return (<div className='nav-bar'>
    <div className='nav-bar-left'>
      {/*<div className='expand-button-area'>*/}
      {/*  <Popover placement='bottomLeft'*/}
      {/*           visible={popVisible}*/}
      {/*           onVisibleChange={(visible) => setPopVisible(visible)}*/}
      {/*           arrowPointAtCenter*/}
      {/*           content={renderPopoverContent}>*/}
      {/*    <AlignLeftOutlined className={`expand-button ${popVisible && 'visible'}`}*/}
      {/*                       size={32} />*/}
      {/*  </Popover>*/}
      {/*</div>*/}
      <div className='logo-area'>
        <img
          alt=''
          src='http://assest.sablogs.cn/img/typora/ninja.png'
          height={24}
          width={24}
        />
        <span className='logo-area-title'>Ninja</span>
      </div>
    </div>
    <div className='nav-bar-center'>
      <Hitokoto />
    </div>
    {/*<div className='nav-bar-right'>*/}
    {/*  /!*<div className={`weather-svg-wrapper ${weatherVisible && 'visible'}`}>{WeatherSvg()}</div>*!/*/}
    {/*  /!*<Popover placement='bottomRight'*!/*/}
    {/*  /!*         visible={weatherVisible}*!/*/}
    {/*  /!*         onVisibleChange={(visible) => setWeatherVisible(visible)}*!/*/}
    {/*  /!*         arrowPointAtCenter*!/*/}
    {/*  /!*         content={<Weather />}>*!/*/}
    {/*  /!*  <div className={`weather-svg-wrapper ${weatherVisible && 'visible'}`}>{WeatherSvg()}</div>*!/*/}
    {/*  /!*</Popover>*!/*/}
    {/*  <div className='dark-mode-btn'*/}
    {/*       onClick={switchDarkMode}>*/}
    {/*    <div*/}
    {/*      checkedChildren={'🌙'}*/}
    {/*      unCheckedChildren={'☀'}*/}
    {/*    >*/}
    {/*      123*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</div>*/}
    {/*<div style={{position: 'absolute', right:'20px',top:'76px'}}>*/}
    {/*  <Weather />*/}
    {/*</div>*/}
  </div>);
});

export default Navbar;
