import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import stores from '@model';
import NewTab from './components/NewTab';
import './index.less';

render(
  <Provider {...stores}>
    <NewTab />
  </Provider>,
  window.document.querySelector('#app-container'),
);

if (module.hot) module.hot.accept();
